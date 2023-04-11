import { createApp } from 'vue'
import App from './App.vue'
import AppSecond from './components/AppSecond.vue'
import AppThird from './components/AppThird.vue'


createApp(App)
    .component('AppSecond', AppSecond)
    .component('AppThird', AppThird)
.mount('#app')
