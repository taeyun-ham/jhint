// 배포 뒤 sitemap.xml 주소 전부를 IndexNow(Bing 등)에 알림. 실패해도 배포는 성공으로 두고 경고만 남김
import { readdir, readFile } from 'node:fs/promises';

const host = 'jhint.kr';
try {
  // 확인용 키 파일: public/<32자 16진수>.txt(공개 파일, 비밀 아님)
  const keyFile = (await readdir('public')).find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
  if (!keyFile) throw new Error('public/<key>.txt not found');
  const key = keyFile.slice(0, -4);
  const sitemap = await readFile('public/sitemap.xml', 'utf8');
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${keyFile}`, urlList }),
    signal: AbortSignal.timeout(15000),
  });
  // 200 = 받음, 202 = 받음(키 확인 대기)
  if (response.ok) console.log(`IndexNow: ${urlList.length} URLs submitted (HTTP ${response.status})`);
  else console.warn(`IndexNow warning: HTTP ${response.status} ${await response.text()}`);
} catch (error) {
  console.warn(`IndexNow warning: ${error instanceof Error ? error.message : error}`);
}
