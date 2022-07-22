import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: 'inline',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        code: resolve(__dirname, 'src/figma/code.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  preview: {
    port: 3101,
  },
});
