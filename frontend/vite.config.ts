import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  }, 
  plugins: [react(), cesium()],
})
