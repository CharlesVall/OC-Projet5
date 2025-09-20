import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
    '@': new URL('./src', import.meta.url).pathname,
    '@styles': new URL('./src/styles', import.meta.url).pathname,
    },
  },
})
