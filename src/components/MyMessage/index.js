import Message from '@/components/MyMessage/message.js'
import MyMessage from '@/components/MyMessage/MyMessage.vue'

export default {
    install(app) {
        app.component(MyMessage.name, MyMessage)
        // 扩展一个实例方法
        app.config.globalProperties.$message = Message
    },
}
