#!/usr/bin/env bash
# 로컬 개발 서버: 문의 Worker(wrangler dev, 8791) + Vite(5180)를 함께 실행
# Ctrl+C 한 번으로 둘 다 종료
set -euo pipefail
cd "$(dirname "$0")/.."

# wrangler dev는 assets 폴더가 있어야 뜸(실제 화면은 Vite가 제공)
# 설치된 wrangler의 로컬 런타임이 wrangler.jsonc 날짜를 지원하지 않아 로컬에서만 날짜를 낮춤(배포엔 영향 없음)
mkdir -p dist

npx wrangler dev --ip 127.0.0.1 --port 8791 --compatibility-date 2026-05-22 &
WORKER_PID=$!
trap 'kill $WORKER_PID 2>/dev/null' EXIT INT TERM

npx vite --host 0.0.0.0
