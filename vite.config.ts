import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      typekit:
      {
        id: 'vxj5fru',
        defer: true,
        injectTo: 'head-prepend',

      },
      google: {
        preconnect: true,
        injectTo: 'head-prepend',
        families: [
          {
            name: 'Rethink Sans',
            styles: 'ital,wght@0,400..800',
            defer: true,
          },
        ],
      },
    }),
  ],
  css: {
    transformer: 'lightningcss'
  }
})
