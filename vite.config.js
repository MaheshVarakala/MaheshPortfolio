import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/MaheshPortfolio/',
  plugins: [react(), tailwindcss()],
  extend: {
  animation: {
    'gradient-x': 'gradientX 5s ease infinite',
  },
  keyframes: {
    gradientX: {
      '0%, 100%': {
        'background-position': '0% 50%',
      },
      '50%': {
        'background-position': '100% 50%',
      },
    },
  },
},

})
