// vite.config.js

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      // Include both HTML files in the build input
      input: ['index.html', 'about.html', 'days.html', '1.html', '2.html', '3.html', '4.html']
    }
  }
})
