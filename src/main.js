import { createApp } from 'vue'
import './assets/css/normalize.css'
import './assets/fonts/iconfont.css'
import router from './router/'
import App from './App.vue'

const app = createApp(App)
// 将路由器挂载到实例上，需要写在mount函数前面
app.use(router)
app.mount('#app')
