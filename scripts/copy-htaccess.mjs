// Vite's publicDir skips dotfiles, so .htaccess never lands in dist/.
// This postbuild step copies it in so SPA routing + HTTPS rules deploy
// to Hostinger (public_html) with the rest of the build.
import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'public', '.htaccess')
const dest = join(root, 'dist', '.htaccess')

if (existsSync(src)) {
  copyFileSync(src, dest)
  console.log('✓ copied .htaccess into dist/')
} else {
  console.warn('! public/.htaccess not found — skipped')
}
