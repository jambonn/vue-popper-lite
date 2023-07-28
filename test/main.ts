import { createApp } from 'vue';
import App from './App.vue';
import { Popper } from '../src';

const app = createApp(App);
app.component('VPopper', Popper);

app.mount('#app');
