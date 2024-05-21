import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import roteador from '../src/roteador/index';

createApp(App).use(roteador).mount('#app');
