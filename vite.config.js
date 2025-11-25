import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this base path to match your GitHub repository name
  // For example, if your repo is 'stream-commands', use '/stream-commands/'
  // If deploying to root domain, use '/'
  base: '/',
  build: {
    outDir: 'dist',
  },
})

