import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      insertTypesEntry: true,
      cleanVueFileName: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@react-web-kit/button",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: "./src/index.ts",
      external: ["react", "react-dom", "@react-web-kit/tokens"],
    },
  },
})
