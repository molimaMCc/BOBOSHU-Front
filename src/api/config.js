import axios from 'axios'

// 创建aixos实例
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8088',
    timeout: 2000,
    headers: {
        'Content-type': 'application/json;charset-UTF-8',
    },
})

// 请求拦截器
instance.interceptors.request
    .use
    // (config) => {
    //     return config
    // },
    // (error) => {
    //     return Promise.reject(error)
    // }
    ()
// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
