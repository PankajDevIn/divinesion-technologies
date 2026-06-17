import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Or your specific Tailwind import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  base: '/divinesion-technologies/', // ✅ Clean, single line with matching quotes
});
