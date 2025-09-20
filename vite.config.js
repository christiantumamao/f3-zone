import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port: 5177,
    strictPort: true,
  }
})



// previous task we set the port to 5177, so it dont change.