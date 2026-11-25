# jhint.kr 끝 슬래시 주소 307 → 301 (2026-11-25)

- 지시: admin-starter #230 CTO → 웹팀 2026-11-25 16:41(CEO 16:41)
- 요구: 18페이지 모두 "끝 슬래시 → 슬래시 없는 주소" 301, 쿼리(?…)는 그대로. 홈(/)은 해당 없음

## 방법
- `public/_redirects`에 17줄(`/<page>/ /<page> 301`, seoData의 홈 뺀 17개) — Workers 정적 자산이 html_handling(307)보다 먼저 처리
- Worker 앞단(run_worker_first 전체)은 쓰지 않음: 모든 요청이 Worker를 거치게 되어 요금·지연이 늘어남

## 확인(로컬 wrangler dev)
- /about/ → 301 /about, /about/?utm_source=x&a=1 → 301 /about?utm_source=x&a=1(쿼리 그대로), /guides/ → 301 /guides
- 옛 가이드 /guides/oem-vs-odm(/) → 301 /guides#oem-vs-odm
- 없는 주소 /no-such/·/no-such-page → 404, IndexNow 키 파일 200, /api/inquiry 응답 그대로

## 진행 순서
1. 로컬 확인 결과 보고
2. "배포해" 때 PR → 병합. **"배포해" 전 원격 푸시 금지**
3. 새 페이지를 추가하면 `_redirects`에도 한 줄 추가
