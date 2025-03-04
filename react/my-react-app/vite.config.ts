import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), checker({
    overlay: {
      initialIsOpen: false
    },
    terminal: true,
    enableBuild: false,
    typescript: true,
    eslint: {
      useFlatConfig: true,
      lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
    }
  })],
})
