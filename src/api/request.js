import instance from './config'

// 封装get请求
const get = (config) => {
    return instance({
        ...config,
        method: 'get',
        params: config.data,
    })
}

// 封装post
const post = (config) => {
    return instance({
        ...config,
        method: 'post',
        data: config.data,
    })
}

export default {
    get,
    post,
}
