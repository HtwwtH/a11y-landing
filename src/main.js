import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import VScrollLock from 'v-scroll-lock'

const app = createApp(App)
app.use(router).use(VScrollLock)
app.mount('#app')
