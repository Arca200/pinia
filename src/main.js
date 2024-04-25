import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from './pinia/index.js'
import { getCurrentInstance } from 'vue'

const app = createApp(App)

const store = createPinia()

app.use(store)

app.mount('#app')
