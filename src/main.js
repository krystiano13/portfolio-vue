import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import "./assets/index.css"
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})
app.use(autoAnimatePlugin)

app.mount('#app')
