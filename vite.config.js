import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, 'src/components/layout')
      },
      {
        find: '@partials',
        replacement: path.resolve(__dirname, 'src/components/partials')
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, 'src/components/routes')
      },
      {
        find: '@data',
        replacement: path.resolve(__dirname, 'src/data')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/assets/styles')
      }


    ]
  }
})
