import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.css'
import axios from 'axios'

import helperFunc from './helper/func'

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:4000/'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(helperFunc)
app.mount('#app')
