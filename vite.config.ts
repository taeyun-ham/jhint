import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true },
  // 로컬 개발: 폰에서 Tailscale 주소(*.ts.net)로 접속, 문의 API는 wrangler dev(8791)로 넘김
  server: {
    port: 5180,
    strictPort: true,
    allowedHosts: ['.ts.net'],
    proxy: { '/api': 'http://127.0.0.1:8791' },
  },
});
