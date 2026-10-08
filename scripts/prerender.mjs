import { mkdir, readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const serverDir = await mkdtemp(join(tmpdir(), 'jhint-ssg-'));
try {
  await build({ ssr: { noExternal: true }, build: { ssr: 'src/entry-server.tsx', outDir: serverDir, emptyOutDir: true } });
  const { render, seoPages } = await import(pathToFileURL(join(serverDir, 'entry-server.js')));
  const template = await readFile('dist/index.html', 'utf8');
  for (const path of Object.keys(seoPages)) {
    const { html, metadata: { title, description, schema } } = render(path);
    if (description.length < 25 || description.length > 160) throw new Error(path + ': invalid description length');
    if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) throw new Error(path + ': expected one H1');
    const url = 'https://jhint.kr' + (path === '/' ? '' : path);
    const pageSchema = schema || { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url, isPartOf: { '@type': 'WebSite', name: 'JH International', url: 'https://jhint.kr' } };
    const page = template
      .replace(/<title>[\s\S]*?<\/title>/, '<title>' + escape(title) + '</title>')
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, '<meta name="description" content="' + escape(description) + '" />')
      .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, '<meta property="og:title" content="' + escape(title) + '" />')
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, '<meta property="og:description" content="' + escape(description) + '" />')
      .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, '<meta property="og:url" content="' + url + '" />')
      .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, '<link rel="canonical" href="' + url + '" />')
      .replace(/<script id="page-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, '<script id="page-schema" type="application/ld+json">' + JSON.stringify(pageSchema).replaceAll('<', '\\u003c') + '</script>')
      .replace('<div id="root"></div>', () => '<div id="root">' + html + '</div>');
    const directory = join('dist', path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), page);
    console.log(path + ': description ' + description.length + ' characters; body rendered');
  }
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
