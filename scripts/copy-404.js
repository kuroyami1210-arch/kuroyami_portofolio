import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const src = join(dist, 'index.html')
const dest = join(dist, '404.html')

if (existsSync(src)) {
  copyFileSync(src, dest)
  console.log('✔ dist/404.html dibuat dari dist/index.html (fallback SPA untuk /id di GitHub Pages)')
} else {
  console.error('✘ dist/index.html tidak ditemukan, lewati pembuatan 404.html')
  process.exitCode = 1
}
