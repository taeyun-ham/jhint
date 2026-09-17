interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  INQUIRY_TO_EMAILS?: string;
  INQUIRY_FROM_EMAIL?: string;
}

const MAX_FILES = 4;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function labelFor(key: string) {
  return key.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function stringValue(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value : '';
}

function toBase64(bytes: Uint8Array) {
  let binary = '';
  const chunk = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunk) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunk));
  }
  return btoa(binary);
}

async function sendInquiry(request: Request, env: Env) {
  try {
    const form = await request.formData();
    if (stringValue(form.get('website'))) {
      return Response.json({ message: 'Your inquiry has been received.' });
    }

    const required = ['category', 'company_brand', 'contact_person', 'email', 'phone', 'country_target_markets', 'privacy_consent'];
    for (const field of required) {
      if (!stringValue(form.get(field)).trim()) {
        return Response.json({ message: `Please complete ${labelFor(field)}.` }, { status: 400 });
      }
    }

    const email = stringValue(form.get('email'));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const files = form.getAll('attachments').filter((value): value is File => value instanceof File && value.size > 0);
    if (files.length > MAX_FILES) {
      return Response.json({ message: `Please attach no more than ${MAX_FILES} files.` }, { status: 400 });
    }
    if (files.some((file) => file.size > MAX_FILE_SIZE)) {
      return Response.json({ message: 'Each attachment must be 5 MB or smaller.' }, { status: 400 });
    }
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      return Response.json({ message: 'The combined attachment size must be 15 MB or smaller.' }, { status: 400 });
    }

    const recipients = (env.INQUIRY_TO_EMAILS || '').split(',').map((item) => item.trim()).filter(Boolean);
    const apiKey = env.RESEND_API_KEY;
    const fromEmail = env.INQUIRY_FROM_EMAIL;
    if (!apiKey || !fromEmail || recipients.length === 0) {
      return Response.json(
        { message: 'Email delivery is being configured. Please contact JH International directly in the meantime.' },
        { status: 503 },
      );
    }

    const values = new Map<string, string[]>();
    for (const [key, value] of form.entries()) {
      if (value instanceof File || key === 'website') continue;
      const text = String(value).trim();
      if (!text) continue;
      values.set(key, [...(values.get(key) || []), text]);
    }

    const rows = [...values.entries()]
      .map(([key, list]) => `<tr><th style="padding:10px 12px;text-align:left;border-bottom:1px solid #ddd;vertical-align:top">${escapeHtml(labelFor(key))}</th><td style="padding:10px 12px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(list.join(', '))}</td></tr>`)
      .join('');
    const text = [...values.entries()].map(([key, list]) => `${labelFor(key)}: ${list.join(', ')}`).join('\n');
    const attachments = await Promise.all(files.map(async (file) => ({
      filename: file.name,
      content: toBase64(new Uint8Array(await file.arrayBuffer())),
    })));

    const category = stringValue(form.get('category')).replace('-', ' ');
    const company = stringValue(form.get('company_brand'));
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: `JH International Inquiry <${fromEmail}>`,
        to: recipients,
        reply_to: email,
        subject: `[JH International] ${category.toUpperCase()} R&D inquiry — ${company}`,
        html: `<div style="font-family:Arial,sans-serif;color:#191a1c"><h1 style="font-size:24px">New ${escapeHtml(category)} R&D inquiry</h1><p>Submitted through the JH International website.</p><table style="width:100%;border-collapse:collapse">${rows}</table></div>`,
        text: `New ${category} R&D inquiry\n\n${text}`,
        attachments,
      }),
    });

    if (!response.ok) {
      console.error('Inquiry email provider returned status', response.status);
      return Response.json({ message: 'Your inquiry could not be sent right now. Please try again later.' }, { status: 502 });
    }

    return Response.json({ message: 'Thank you. Your R&D inquiry has been sent to the JH International team.' });
  } catch (error) {
    console.error('Inquiry submission failed', error instanceof Error ? error.message : 'Unknown error');
    return Response.json({ message: 'Your inquiry could not be sent right now. Please try again later.' }, { status: 500 });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/inquiry') {
      if (request.method !== 'POST') {
        return Response.json({ message: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } });
      }
      return sendInquiry(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
