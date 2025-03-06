import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'react',
      babel: {
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      },
    }),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      cleanVueFileName: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@react-web-kit/theme-provider',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      input: './src/index.ts',
      external: ['react', 'react-dom'],
    },
  },
})
