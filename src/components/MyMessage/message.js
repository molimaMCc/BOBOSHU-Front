import { createVNode, render } from 'vue'
import MyMessage from './MyMessage.vue'

// 动态创建一个DOM容器
const div = document.createElement('div')
// div.setAttribute('class', 'my-meassage-container')
document.body.appendChild(div)

export default ({ text, type }) => {
    let timer = null
    // createVNode 用于创建一个虚拟节点
    // 参数一支持组件
    // 参数二表示传递给组件的选项
    const vnode = createVNode(MyMessage, { text, type })
    // 把虚拟的节点渲染到页面的DOM中即可
    // render函数的参数
    // 参数一：表示需要渲染的内容（虚拟节点）
    // 参数二：表示渲染的目标位置（DOM元素）
    render(vnode, div)

    // 希望提示信息显示1秒后消失
    clearTimeout(timer)
    timer = setTimeout(() => {
        // 清空div中的内容
        render(null, div)
    }, 1500)
}

// $message({ text: '登录失败', type: 'error'})
