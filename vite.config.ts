import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      'views': resolve(__dirname, 'src/views'),
      '@': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
      'types': resolve(__dirname, 'src/types'),
      'store': resolve(__dirname, 'src/store')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver(),],
    }),
    // elementPlusIcon自动引入
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
  ]
})
