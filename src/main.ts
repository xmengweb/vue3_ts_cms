import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './assets/css/reset.css'
import 'element-plus/dist/index.css'
import pinia from '@/store/index'
import router from '@/router/index'
import useLoginStore from '@/store/Login'
import getRoutes from '@/utils/getRoutes'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
const store = useLoginStore()
getRoutes(store)
app.use(router).mount('#app')
