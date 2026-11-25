# jhint.kr Compliance 페이지 수정 요청 (2026-11-25)

- 받은 자료: `JH_Website_Edit_Revision_Compliance.pptx`(5장, 화면 캡처 + 메모, 영업담당 → 대표 메일) — `docs/requests/assets/`
  - 장별 그림: `assets/2026-11-25-compliance-request-1.png` ~ `-5.png`
- 지시: jhint-admin #192 JH 본부장 → CTO 2026-11-25 22:24(CEO 결정). 순서: 디자인실 시안 → CEO 확인 → 웹팀 반영. 배포는 CEO 지시 때
- 대상: https://jhint.kr/compliance — `src/CompliancePage.tsx`, `src/styles.css`(compliance-*)
- 문구: 파일 그대로(고치지 않음)

## 요청 5건

| # | 장 | 대상 | 요청 | 참고 |
|---|---|---|---|---|
| 1 | 1 | 첫 화면(hero) 바탕 `#1b1b1d` | 머리말과 같은 검정이라 열자마자 너무 셈 → 바탕색 바꾸기. 위 여백을 다음 칸까지 넓게 | 시설 카드 3개가 hero 안의 어두운 카드라 바탕을 바꾸면 카드 색도 같이 |
| 2 | 2 | 시설 카드 3개 | 아이콘을 넣어 전문적으로 | |
| 3 | 3 | 지역 카드 6개(GLOBAL MARKET SUPPORT) | 국기나 아이콘으로 보강 | Middle East & UAE, Asia·Africa·LATAM & Central Asia는 나라가 여럿 → 6개 지역 아이콘 통일 또는 국기 4 + 지역 아이콘 2 — 디자인실 판단 |
| 4 | 4 | COMPLIANCE GOVERNANCE | 본문·01~04 문구 교체(4장 원문) | |
| 5 | 5 | 새 칸 Packaging compliance | 칸 추가(5장 원문) | 본부장 안 아래(디자인실이 더 나은 안 있으면 그쪽) |

### 5번 본부장 안
- 위치: GOVERNANCE 다음, 맨 아래 문의 띠(QuoteBand) 앞 — 지역 → 서류 → 포장 → 문의 흐름
- 모양: GOVERNANCE(왼쪽 제목 + 오른쪽 목록)와 다르게 — 위 작은 제목 PACKAGING COMPLIANCE·큰 제목·본문, 아래 "Global Packaging & Artwork Review" 표시 + 아이콘 카드 3개 가로(2번 아이콘 카드와 통일)
- 바탕: GOVERNANCE와 다른 톤(지역 칸 연한 베이지 계열)

## 4번 원문

Small Headline: COMPLIANCE GOVERNANCE
Headline: The right evidence for each project.
Body Copy: Regulatory requirements vary by formula, manufacturing site, and target market. Before production begins, we verify exact facility credentials—such as ISO 22716 (GMP) and FDA registration—for your assigned site and define responsibilities for testing, registration, labeling, and import procedures. This ensures every credential matches your final product scope rather than relying on blanket claims.

01 Technical & Formula Dossiers: Full INCI breakdowns, quantitative formulas, Certificates of Analysis (COA), Safety Data Sheets (SDS), and Product Information File (PIF) support.
02 Safety, Stability & Label Testing: Product-specific stability, packaging compatibility, microbiological screening, preservative efficacy (challenge) testing, and market-specific INCI/claim reviews.
03 Export & Trade Certificates: Korean Ministry of Food and Drug Safety (MFDS) certificates, Certificates of Free Sale (CFS), Certificates of Origin, and embassy legalization support.
04 Clear Responsibility Alignment: Upfront division of regulatory duties between JH International, your testing partners, and your local Responsible Person or importer for seamless market entry (including EU CPNP, UK SCPN, and US MoCRA).

## 5번 원문

Market-ready packaging, artwork review, and localized translations.
Packaging compliance goes beyond translating text—it requires meeting strict regional rules on mandatory disclosures, INCI formatting, symbol usage, and bilingual layouts. Before printing begins, we review your packaging die lines and artwork against destination market regulations to prevent customs holds and costly reprints.
Global Packaging & Artwork Review
Mandatory Label Elements: Verification of net weight/volume formats, batch/lot coding, Period After Opening (PAO) or expiration dates, manufacturer/importer details, and required safety warnings.
INCI & Ingredient Formatting: Accurate ingredient lists ordered by concentration, allergen disclosures, and colorant index (CI) numbering aligned with local nomenclature.
Claims & Typography Check: Screening front-of-pack marketing claims, font size minimums, and mandatory regulatory icons (e.g., e-mark, recycling symbols, sun protection ratings).
