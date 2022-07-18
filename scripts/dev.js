const { JSDOM } = require('jsdom');
const fs = require('fs');
const vue = require('@vitejs/plugin-vue');
const path = require('path');
const vite = require('vite');
const axios = require('axios');

const rootDir = path.resolve(__dirname, '../');

const HOST = '127.0.0.1';
const PORT = 3100;
const MODE = 'dev';

// Environment variable assignment
process.env = { ...process.env, ...vite.loadEnv(MODE, rootDir) };

async function dev() {
  await buildMainCode();
  await startDevServer();
  await genIndexHtml();
}

// Generate html file
async function genIndexHtml() {
  const targetHTMLPath = path.resolve(rootDir, 'dist/index.html');
  const htmlContent = await getHTMLfromDevServer();
  const dom = new JSDOM(htmlContent);
  const {
    document,
  } = dom.window;

  const base = document.createElement('base');
  base.setAttribute('href', `http://${HOST}:${PORT}/`);
  dom.window.document.head.insertBefore(base, document.head.firstChild);

  const result = dom.serialize();
  fs.writeFileSync(targetHTMLPath, result);
}

// Build code.js entry
async function buildMainCode() {
  const config = vite.defineConfig({
    configFile: false, // Close the profile used by default
    build: {
      emptyOutDir: false, // Do not empty the dist directory
      lib: { // Build with library schema
        entry: path.resolve(rootDir, 'src/worker/code.ts'),
        name: 'code',
        formats: ['es'],
        fileName: () => 'code.js',
      },
      sourcemap: 'inline',
      watch: {},
    },
  });
  return vite.build(config);
}

// Turn on devServer
async function startDevServer() {
  const config = vite.defineConfig({
    mode: 'dev',
    configFile: false,
    plugins: [vue()],
    root: rootDir,
    server: {
      hmr: {
        host: HOST, // This must be added, otherwise HMR will report an error
      },
      port: PORT,
    },
  });
  const server = await vite.createServer(config);
  await server.listen();

  server.printUrls();
}

// Get HTML by requesting devServer
async function getHTMLfromDevServer() {
  const rsp = await axios.get(`http://${HOST}:${PORT}/index.html`);
  return rsp.data;
}

dev();
