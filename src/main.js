import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router.js';
import store from './plugins/store.js';
import './assets/tailwind.css'

createApp(App)
.use(router)
.use(store)
.mount('#app')
