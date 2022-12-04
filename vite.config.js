import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// vue3的hooks自动引入
// import AutoImport from 'unplugin-auto-import'

//让setup语法糖支持name属性
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // AutoImport({ import: ['vue', 'vue-router', '@vueuse/head'] }),
        vueSetupExtend(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
