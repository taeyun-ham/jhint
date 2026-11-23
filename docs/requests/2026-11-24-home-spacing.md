# jhint.kr 홈 여백 수정 (2026-11-24)

- 받은 자료: `JH_Home_Page_Add_More_Spacing_in_Sections_Make_less_squishy.pptx`(5장, 화면 캡처 + 메모) — `docs/requests/assets/`
- 지시: admin-starter #221 CTO → 웹팀 2026-11-24 07:54·07:56(JH 본부장 #179 07:53 기획 정리, CEO 확인)
- 범위: **디자인(여백·행간)만, 문구 그대로**. 문의 띠는 공통 부분을 고쳐 모든 페이지 같게
- 하지 않음: 메뉴에 홈 버튼 추가(1장 메모) — 로고 눌러 홈 이동 그대로

---

## 바꾼 것(`src/styles.css`)

| 구역(장표) | 위치 | 전 | 후(PC 최대값 기준) |
|---|---|---|---|
| 문의 띠 "Tell us what you want to make."(1·5장) — 모든 페이지 | 위아래 여백(홈) | 44~80px | 60~108px |
| | 위아래 여백(제품 페이지 등 compact) | 36~64px | 52~92px |
| | 오른쪽 설명 글 행간 / 아래 간격 | 1.65 / 32px | 1.85 / 36px |
| MANUFACTURING CAPABILITY(2·3장) | 설명 글 ↔ 사진 줄 | 60px | 64~96px |
| | 사진 카드 ↔ 다음 구역 | 50~91px | 72~124px |
| WHY INTERNATIONAL BRANDS WORK WITH JH(3장) | 오른쪽 목록 3개 각 위아래 | 30px | 34~44px |
| BUYER GUIDES 띠(4장) | 위아래 여백 | 44~77px | 60~108px |

- 값은 화면 너비에 따라 자동 조절(clamp). 폰은 최소값 쪽이 적용돼 조금씩 넓어짐
- 2장 메모의 "아래쪽"은 사진 카드 아래 → 다음 구역(어두운 WHY 띠) 사이로 봄

## 전후 사진

- PC 홈 아래쪽: `assets/2026-11-24-home-spacing-pc-before-after.jpg`(왼쪽 전, 오른쪽 후)
- 폰 390: `assets/2026-11-24-home-spacing-phone-before-after.jpg`
- 제품 페이지 문의 띠(Skincare): `assets/2026-11-24-quote-band-skincare-before-after.jpg`(위 전, 아래 후 — 띠 높이 309 → 355px)

---

## 진행 순서

1. 로컬 `:5180`에서 사용자 확인(PC·폰), CTO는 로컬 diff 리뷰
2. "배포해" 때 PR → 병합(= 운영 배포). **"배포해" 전 원격 푸시 금지**
