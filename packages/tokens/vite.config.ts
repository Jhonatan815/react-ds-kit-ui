import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'src/index.ts', // Entrada principal
      name: 'Tokens',
      fileName: 'index',
      formats: ['es', 'cjs'], // Formatos en los que se compilará el paquete
    },
    rollupOptions: {
      external: ['react'], // Dependencias externas si es necesario
    },
  },
})
