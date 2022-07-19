import { createApp } from 'vue';
import App from './App.vue';
import { initApi } from './api/connection';

(async () => {
  await initApi();
  createApp(App).mount('#app');
})();

