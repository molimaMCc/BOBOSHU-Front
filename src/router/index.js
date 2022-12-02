import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/view/Layout/index.vue'
import BlogRegister from '@/view/Login/BlogRegister.vue'
import BlogBlogin from '@/view/Login/BlogBlogin.vue'

const routes = [
    {
        path: '/',
        component: Layout,
    },
    {
        path: '/Login',
        name: 'BlogLogin',
        component: BlogBlogin,
    },
    {
        path: '/Register',
        name: 'BlogRegister',
        component: BlogRegister,
    },
]
const router = createRouter({
    routes,
    history: createWebHistory(),
})
export default router
