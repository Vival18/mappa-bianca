import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia il nome se la repo ha nome diverso
export default defineConfig({
  base: '/mappa-bianca/',
  plugins: [react()],
})

