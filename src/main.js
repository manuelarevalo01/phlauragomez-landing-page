import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

// eCharts
import '@/plugins/eCharts';

// i18n
import i18n from './plugins/i18n';

createApp(App).use(i18n).use(store).use(router)
  .mount('#app');
