import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import roteador from '../src/roteador/index';
import { key, store } from './store';

library.add(faCheck, faPlay);

const app = createApp(App);
app.use(roteador).use(store, key);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
