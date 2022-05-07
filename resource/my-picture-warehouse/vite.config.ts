import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/public/branchs/picture-warehouse/',

  plugins: [
    vue({
      script: {
        reactivityTransform: true,
      },
    }),
  ],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },

  server: {
    port: 7009,
  },

  build: {
    // outDir: 'dist', // 指定输出路径
    outDir: path.resolve(__dirname, '../../public/branchs/picture-warehouse/'), // 指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
  },
})
