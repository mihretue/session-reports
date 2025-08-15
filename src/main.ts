import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

// Optional: import Quasar styles
import 'quasar/dist/quasar.css'

// Router
import router from './pages'

// Root component
import App from './App.vue'

const app = createApp(App)

// ✅ Add Pinia
const pinia = createPinia()
app.use(pinia)

// ✅ Add Quasar
app.use(Quasar, {
  plugins: {}, // You can enable Quasar plugins later
})

// ✅ Add Router
app.use(router)

app.mount('#app')
