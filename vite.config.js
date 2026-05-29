import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    proxy: {
      '/api': {
        target: 'https://mock-api-server-production-7f5d.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/match-to-match/api'),
      },
    },
  },
})
