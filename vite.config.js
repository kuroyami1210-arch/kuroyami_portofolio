import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base relatif agar build jalan di GitHub Pages subpath
  // (/kuroyami_portofolio/) maupun custom domain root (my.id)
  base: './',
})
