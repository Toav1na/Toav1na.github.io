import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // On importe notre config
import './style.css'

const app = createApp(App)

app.use(router) // On dit à Vue d'utiliser le router
app.mount('#app')