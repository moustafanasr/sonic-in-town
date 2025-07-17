import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  }
})