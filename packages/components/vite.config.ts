// packages/components/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@react-web-kit/components',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Asegúrate de que aquí no se estén buscando archivos html
      input: './src/index.ts', // Asegúrate de que no haya index.html como entrada
      external: ['react'],
    },
  },
})
