# jhint.kr /oem-odm 제목 + IndexNow (2026-11-25)

- 지시: admin-starter #230 CTO → 웹팀 2026-11-25 16:02(JH 본부장 #192 16:01, CEO 결정 16:01)

## 1. /oem-odm 제목
- 까닭: Bing "같은 제목 여러 페이지" 경고(/ 와 /oem-odm 제목이 같음)
- /oem-odm 제목: "Cosmetics OEM, ODM & Private Label Development | JH International"
  - seoData.ts `/oem-odm`, siteData.ts `/oem-odm` metaTitle(같은 문구 쓰는 곳) — prerender가 title·og:title에 같이 넣음
- 홈(/) 제목 그대로
- 빌드 결과 모든 페이지 제목이 서로 다름

## 2. IndexNow
- 키 파일: `public/68bd825e6cda7829d2abe7eba7e2dd20.txt`(공개 파일, 비밀 아님)
- `scripts/indexnow.mjs`: public/sitemap.xml 주소 전부를 api.indexnow.org로 보냄. 실패해도 종료 코드 0(경고만)
- `npm run deploy` = build → wrangler deploy → `npm run indexnow`
- ⚠️ 운영 배포는 Workers Builds(main push)가 함. 대시보드의 배포 명령이 `npm run deploy`가 아니면 IndexNow가 안 돌므로 배포 명령 끝에 `&& npm run indexnow`가 필요(사용자 확인)

## 옛 주소 확인(운영, 2026-11-25)
- 지난 사이트맵 전체 26개 = 지금 18개 + 옛 가이드 8개 → Bing 발견 URL 26과 맞음
- 지금 18개 200, 옛 가이드 /guides/<slug> 8개 301 → /guides#<slug>
- 참고(이번 범위 밖): 없는 주소(/no-such-page)는 404가 아니라 200 + 홈 제목(SPA), 끝 슬래시(/about/)는 307

## 진행 순서
1. 로컬 `:5180`에서 CEO 확인
2. "배포해" 때 PR → 병합(= 운영 배포). **"배포해" 전 원격 푸시 금지**
3. 배포 뒤 CEO가 Bing 웹마스터 IndexNow 화면에서 받은 기록 확인
