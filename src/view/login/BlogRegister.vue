<template>
    <div class="container-register">
        <router-link class="goback" to="/"
            ><img src="@/assets/imgs/logokowhite.png" alt=""
        /></router-link>
        <section>
            <div class="register-illustrator"></div>
            <div class="register">
                <div class="register-form">
                    <h1>Register</h1>
                    <input v-model="userName" type="text" placeholder="user" />
                    <input
                        v-model="userPassword"
                        type="password"
                        placeholder="password"
                    />
                    <input
                        v-model="userEmail"
                        type="email"
                        placeholder="email"
                    />
                    <input
                        v-model="userTel"
                        type="tel"
                        placeholder="telephone"
                    />
                    <button class="btn" @click="goLogin">Subscribe</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import api from '@/api/login.js'
const userRegisterForm = reactive({
    userName,
    userPassword,
    userEmail,
    userTel,
})
function goLogin() {
    api.loginApi(userRegisterForm)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
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
            // width: 200px;
            height: 300px;
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
