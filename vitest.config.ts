import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'node',
    alias: {
      '@': 'src'
    }
  }
})
