const vue = require('@vitejs/plugin-vue');
const path = require('path');
const vite = require('vite');

const rootDir = path.resolve(__dirname, '../');

const MODE = 'prod';


// Environment variable assignment
process.env = { ...process.env, ...vite.loadEnv(MODE, rootDir) };

async function build() {
  await buildMainCode();
  await buildHtml();
}

// Build code.js entry
async function buildMainCode() {
  const config = vite.defineConfig({
    configFile: false, // Close the profile used by default
    build: {
      // emptyOutDir: false, // Do not empty the dist directory
      lib: { // Build with library schema
        entry: path.resolve(rootDir, 'src/figma/code.ts'),
        name: 'code',
        formats: ['es'],
        fileName: () => 'code.js',
      },
      sourcemap: false,
    },
  });
  return vite.build(config);
}

// Turn on devServer
async function buildHtml() {
  const config = vite.defineConfig({
    mode: MODE,
    base: process.env.VITE_APP_PUBLIC_PATH,
    configFile: false,
    plugins: [vue()],
    root: rootDir,
    build: {
      emptyOutDir: false, // Do not empty the dist directory
      rollupOptions: {
        output: {
          entryFileNames: '[name].js', // Do not hash to achieve hotter
          assetFileNames: 'assets/[name][extname]',
          chunkFileNames: 'assets/[name].js',
        },
      },
      sourcemap: false,
    },
  });
  await vite.build(config);
}

build();
