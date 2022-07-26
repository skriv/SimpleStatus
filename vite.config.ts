import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
    // https://vitejs.cn/config/#build-csscodesplit
    cssCodeSplit: false,
    // https://vitejs.cn/config/#build-assetsinlinelimit
    assetsInlineLimit: 100000000,
    rollupOptions: {
      input: {
        index: 'index.html',
        code: 'figma/code.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
