import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AppLink from './components/AppLink.vue'
import LinkToSelf from './components/LinkToSelf.vue'

const app = createApp(App)

app.component('AppLink', AppLink)
app.component('LinkToSelf', LinkToSelf)

app.use(router)
app.mount('#root')
