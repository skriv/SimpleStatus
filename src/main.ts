import { createApp } from 'vue';
import App from './App.vue';
import { initApi } from './figma/connectToPlugin';

(async () => {
  await initApi();
  createApp(App).mount('#app');
})();

