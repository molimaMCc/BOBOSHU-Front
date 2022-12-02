import login from './request'

const loginApi = (data) => {
    return login.post({
        url: '/user',
        data: data,
    })
}

const registerApi = (data) => {
    return login.post({
        url: '/user/register',
        data: data,
    })
}

export default {
    loginApi,
    registerApi,
}
