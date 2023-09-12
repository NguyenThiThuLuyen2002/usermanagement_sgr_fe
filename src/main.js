import './assets/main.css'
import './static/fontawesome-free-6.4.2-web/css/all.min.css'
import Notifications from '@kyvg/vue3-notification'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'; // Đường dẫn đến tệp cấu hình Vue Router
import { createPinia } from 'pinia'
// import TestComponent from './components/TestComponent.vue' //global
const pinia = createPinia()
createApp(App)
    // .component('TestComponent',TestComponent)
    .use(Notifications)
    .use(router)
    .use(pinia)
    .mount('#app')