import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import roteador from '../src/roteador/index';
import { key, store } from './store';
import 'bulma/css/bulma.css';

createApp(App).use(roteador).use(store, key).mount('#app');
