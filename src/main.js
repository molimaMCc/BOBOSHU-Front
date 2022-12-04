import { createApp } from 'vue'
// unplugin-auto-import插件的继承者，解决因为它的自动导入导致的eslint报错
// import 'vue-global-api'
import '@/assets/css/normalize.css'
import '@/assets/fonts/iconfont.css'
import Messageplugin from '@/components/MyMessage/index.js'
import router from './router/'
import App from './App.vue'

const app = createApp(App)
// 将路由器挂载到实例上，需要写在mount函数前面
app.use(router)
app.use(Messageplugin)
app.mount('#app')
