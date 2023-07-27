import { createApp } from 'vue';
import App from './App.vue';
import VuePopper from '../src';

const app = createApp(App);
app.component('Popper', VuePopper);

app.mount('#app');
