<template>
    <div class="container-register">
        <router-link class="goback" to="/"
            ><img src="@/assets/imgs/logokowhite.png" alt=""
        /></router-link>
        <section>
            <div class="register-illustrator"></div>
            <div class="register">
                <Form ref="target" v-slot="{ errors }" method="post">
                    <div class="register-form">
                        <h1>Register</h1>
                        <Field
                            v-model="userRegister.username"
                            name="username"
                            :rules="checkAccount"
                            type="text"
                            placeholder="username"
                        />
                        <div class="error" v-if="errors.username">
                            <i class="iconfont icon-warning"></i>
                            {{ errors.username }}
                        </div>
                        <Field
                            v-model="userRegister.password"
                            name="password"
                            :rules="checkPwd"
                            type="password"
                            placeholder="password"
                            autocomplete
                        />
                        <div class="error" v-if="errors.password">
                            <i class="iconfont icon-warning"></i>
                            {{ errors.password }}
                        </div>
                        <Field
                            v-model="userRegister.email"
                            name="email"
                            :rules="checkEmail"
                            type="email"
                            placeholder="email"
                        />
                        <div class="error" v-if="errors.email">
                            <i class="iconfont icon-warning"></i>
                            {{ errors.email }}
                        </div>
                        <Field
                            v-model="userRegister.nikename"
                            name="nikename"
                            :rules="checkNikename"
                            type="text"
                            placeholder="nikename"
                        />
                        <div class="error" v-if="errors.nikename">
                            <i class="iconfont icon-warning"></i>
                            {{ errors.nikename }}
                        </div>
                        <Field name="headerImg" type="file" />
                        <button class="btn" @click.prevent="handleLongin">
                            Subscribe
                        </button>
                    </div>
                </Form>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Form, Field, useField } from 'vee-validate'
import { reactive, ref, getCurrentInstance } from 'vue'
import api from '@/api/login.js'
const instance = getCurrentInstance()
const target = ref(null)
// 定义表单数据
const userRegister = reactive({
    username: null,
    password: null,
    email: null,
    nikename: null,
    headerImg: null,
})

// 定义表单-用户名验证规则
const checkAccount = (value) => {
    //value为获取输入框的值
    // 1.必填项, 5-9个字符，需要以字母开头。校验是否成功，返回true成功，其他情况失败，返回失败的原因
    if (!value) return '请输入用户名'
    if (!/^[a-zA-Z]\w{5,9}$/.test(value)) return '字母开头且5-9个字符'
    return true
}
// 定义表单-密码验证规则
const checkPwd = (value) => {
    // 1.必填项 2.6-24个字符
    if (!value) return '请输入密码'
    if (!/^[a-zA-Z]\w{6,24}$/.test(value)) return '字母开头且6-24个字符'
    return true
}
// 定义表单-邮箱验证规则
const checkEmail = (value) => {
    if (!value) return '请输入邮箱'
    if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))
        return '输入正确的邮箱格式'
    return true
}
// 定义表单-电话验证规则
const checkNikename = (value) => {
    if (!value) return '请输入昵称'
    if (!/^[a-z0-9_-]{3,16}$/.test(value)) return '3-16且是字母或数字'
    return true
}

//点击登录
const handleLongin = async () => {
    const valid = await useField(target.value)
    if (valid) {
        // 调用登录接口
        api.registerApi(userRegister)
            .then((result) => {
                instance.proxy.$message({ text: '验证成功', type: 'success' })
                console.log(result)
            })
            .catch((err) => {
                instance.proxy.$message({ text: err, type: 'error' })
            })
    }
}
</script>

<style lang="less" scoped>
.container-register {
    width: 100vw;
    height: 100vh;
    background: rgb(37, 43, 66);
    .goback {
        position: absolute;
        // display: block;
        // margin-top: 5px;
        width: 120px;
        height: 53px;
        top: 5px;
        left: 70px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .goback :hover {
        opacity: 0.7;
    }
    section {
        display: flex;
        justify-content: space-between;
        padding: 96px 60px 0;
        .register-illustrator {
            margin-top: 80px;
            width: 800px;
            height: 500px;
            background: url(../../assets/imgs/registerBg.png) no-repeat;
        }
        .register {
            position: absolute;
            top: 200px;
            right: 180px;
            background: rgb(37, 43, 66);
            .register-form {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 25px;
                h1 {
                    text-align: center;
                    color: #fff;
                }
                input {
                    margin: 10px 0;
                    height: 35px;
                    width: 250px;
                    border-radius: 25px;
                    line-height: 35px;
                    padding: 5px 15px;
                    font-size: 20px;
                }
                .error {
                    color: #fff;
                }
                .btn {
                    margin-top: 10px;
                    padding: 10px 0;
                    width: 100%;
                    border-radius: 25px;
                    border: 2px solid transparent;
                    font-size: 18px;
                    color: #fff;
                    background: rgb(108, 99, 255e);
                }
                .btn:hover {
                    color: rgb(0, 239, 255);
                    border: 2px solid rgb(0, 239, 255);
                }
            }
        }
    }
}
</style>
