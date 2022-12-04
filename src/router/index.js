import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const routes = [
    {
        path: '/',
        component: Layout,
    },
    {
        path: '/Login',
        name: 'BlogLogin',
        component: () => import('@/views/Login/BlogBlogin.vue'),
    },
    {
        path: '/Register',
        name: 'BlogRegister',
        component: () => import('@/views/Login/BlogRegister.vue'),
    },
    {
        path: '/WorkeTable',
        name: 'WorkeTable',
        component: () => import('@/views/WorkeTable/index.vue'),
    },
    {
        path: '/join',
        name: 'join',
        component: () => import('@/views/Join/index.vue'),
    },
]
const router = createRouter({
    routes,
    history: createWebHistory(),
})
export default router
