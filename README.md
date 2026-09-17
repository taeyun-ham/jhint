# JH International — Cloudflare Website

JH International의 정적 React 홈페이지와 문의 이메일 발송용 Cloudflare Worker를 한 프로젝트에 구성했습니다.

## 구성

- `/` — 회사 메인 홈페이지
- `/inquiry` — 스킨케어·헤어케어·메이크업 R&D 문의 화면
- `/api/inquiry` — Cloudflare Worker가 문의를 받아 Resend로 이메일 발송
- `dist/` — 빌드 후 생성되는 정적 홈페이지 파일

Next.js는 사용하지 않습니다. 일반 React + Vite 정적 사이트이며, 문의를 보낼 때만 Worker가 실행됩니다.

## 이메일 작동 방식

고객이 문의 화면에서 `SEND R&D INQUIRY` 버튼을 누르면 Worker가 Resend API를 호출합니다. 수신자는 개인 Gmail 주소여도 됩니다. 두 명 이상이면 이메일 주소를 쉼표로 구분합니다.

```text
INQUIRY_TO_EMAILS=employee1@gmail.com,employee2@gmail.com
```

고객이 입력한 이메일은 `Reply-To`로 설정되므로, 받은 문의 메일에서 바로 답장할 수 있습니다.

## 1. Resend 준비

1. Resend에서 발신에 사용할 회사 도메인을 인증합니다.
2. Resend API Key를 만듭니다.
3. 인증된 도메인의 발신 주소를 정합니다. 예: `inquiry@your-company.com`

중요: 수신자는 Gmail이어도 되지만, 운영용 발신 주소는 Resend에서 인증한 도메인의 주소를 사용하는 것이 좋습니다.

## 2. 로컬에서 확인

Node.js 22 이상이 필요합니다.

```bash
npm install
cp .dev.vars.example .dev.vars
npm run worker:dev
```

`.dev.vars`에 실제 값을 입력합니다.

```text
RESEND_API_KEY=re_xxxxxxxxx
INQUIRY_TO_EMAILS=employee1@gmail.com,employee2@gmail.com
INQUIRY_FROM_EMAIL=inquiry@your-verified-domain.com
```

`.dev.vars`는 Git에 포함되지 않도록 설정되어 있습니다.

## 3. Cloudflare에 비밀값 등록

프로젝트 폴더에서 아래 명령을 각각 실행합니다.

```bash
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put INQUIRY_TO_EMAILS
npx wrangler secret put INQUIRY_FROM_EMAIL
```

입력값 예시:

- `RESEND_API_KEY`: Resend에서 만든 API Key
- `INQUIRY_TO_EMAILS`: `employee1@gmail.com` 또는 `employee1@gmail.com,employee2@gmail.com`
- `INQUIRY_FROM_EMAIL`: Resend에서 인증한 주소

비밀값은 GitHub 소스나 Cloudflare 환경 변수의 일반 텍스트 칸에 올리지 말고, 반드시 Secret으로 저장하세요.

## 4. 직접 배포

```bash
npm install
npm run deploy
```

이 명령은 정적 파일을 먼저 빌드한 뒤, 홈페이지와 Worker를 함께 Cloudflare Workers에 배포합니다.

## 5. GitHub와 Cloudflare 연결

이 폴더의 파일을 GitHub 저장소에 올린 후 Cloudflare Workers의 Git 연결에서 해당 저장소를 선택합니다.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: 저장소 최상위 폴더

Resend 관련 세 값은 Cloudflare 대시보드의 Worker 설정에서 Secret으로 등록합니다.

## SEO 마무리

도메인이 확정되면 다음 두 곳을 수정하세요.

1. `index.html`의 `og:image`를 실제 전체 주소로 변경
2. `public/sitemap.xml.example` 안의 `YOUR-DOMAIN.com`을 실제 도메인으로 변경한 뒤 파일명을 `sitemap.xml`로 변경

그 다음 Google Search Console에 사이트와 사이트맵을 등록하면 됩니다.

## 확인 명령

```bash
npm run check
npm run build
npx wrangler deploy --dry-run
```

첨부파일은 최대 4개, 파일당 5MB, 전체 15MB까지 받도록 구성되어 있습니다.
