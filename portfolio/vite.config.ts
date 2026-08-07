import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` must match your GitHub repo name for GitHub Pages project sites
// (https://<user>.github.io/<repo>/). Change it if you rename the repo,
// or set it back to "/" if you deploy to a custom domain or Vercel/Netlify.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
