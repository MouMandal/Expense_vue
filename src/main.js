import { createApp } from 'vue'
//TOASTIFICATION
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/style.css'
import App from './App.vue'

const app = createApp(App);
//TOASTIFICATION
app.use(Toast);
app.mount('#app')
