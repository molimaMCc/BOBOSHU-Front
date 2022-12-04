<template>
    <header>
        <div class="header-main">
            <div class="header-container">
                <div class="logo">
                    <router-link class="logo-link" to="/">
                        <img
                            src="@/assets/imgs/logokowhite.png"
                            alt="博客"
                            class="logo-img"
                        />
                    </router-link>
                </div>
                <div class="content">
                    <nav class="nav">
                        <ul class="nav-items">
                            <li class="nav-item readme">
                                <span
                                    >说明文档<i
                                        class="iconfont icon-arrow-down-bold"
                                    ></i
                                ></span>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <a href="">快速开始</a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a href="">博客详情</a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a href="">风格</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/WorkeTable"
                                    >WorkeTable</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link to="/join">join us</router-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="nav-right">
                        <div class="slide"><span>幻灯片</span></div>
                        <router-link class="user login" to="/Login"
                            >Sign in</router-link
                        >
                        <router-link class="user register" to="/Register"
                            >Sign up</router-link
                        >
                        <div class="social">
                            <a href="" class="iconfont icon-github"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup></script>

<style lang="less" scoped>
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 888;
    background: rgb(4, 63, 114);
    background: linear-gradient(
        103deg,
        rgba(4, 63, 114, 1) 50%,
        rgba(36, 37, 93, 1) 69%,
        rgba(54, 27, 91, 1) 86%,
        rgba(93, 13, 107, 1) 100%
    );
    .header-main {
        position: relative;
        padding: 0 32px;
        // background: #fefefe;
        .header-container {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 90%;
            .logo {
                .logo-link {
                    display: block;
                    margin-top: 5px;
                    width: 120px;
                    height: 53px;
                    .logo-img {
                        width: 100%;
                        height: 100%;
                    }
                }
                a:hover {
                    opacity: 0.7;
                }
            }
            .content {
                display: flex;
                justify-content: flex-end;
                .nav {
                    .nav-items {
                        display: flex;
                        .nav-item {
                            margin: 0 15px;
                            padding: 5px;
                            font-weight: 600;
                            a {
                                color: #fefefe;
                            }
                        }
                        .nav-item:hover a {
                            color: #7273f1;
                        }
                        .readme {
                            position: relative;
                            span {
                                color: #fff;
                                i {
                                    padding-left: 5px;
                                    color: #fff;
                                }
                            }
                            .dropdown-menu {
                                display: none;
                                position: absolute;
                                visibility: hidden;
                                border-radius: 15px;
                                border: 1 solid transparent;
                                min-width: 192px;
                                padding: 10px 15px;
                                top: 25px;
                                right: 0;
                                opacity: 0;
                                box-shadow: 1px 1px 1px 1px#adaaaa,
                                    1px 1px 1px 1px#adaaaa;
                                // background: #fff;
                                transform: translateY(3px);
                                transition: all 0.5s;
                                .dropdown-item {
                                    padding: 8px;
                                    a {
                                        display: block;
                                        color: #fff;
                                        white-space: nowrap;
                                    }
                                    a:hover {
                                        color: #7273f1;
                                    }
                                }
                            }
                        }
                        .readme:hover .dropdown-menu {
                            display: block;
                            opacity: 1;
                            visibility: visible;
                        }
                        .readme:hover span {
                            cursor: pointer;
                            color: #7273f1;
                        }
                    }
                }
                .nav-right {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    div:nth-child(n) {
                        width: 36px;
                        height: 36px;
                        margin: 0 5px;
                    }
                    .slide {
                        color: red;
                    }
                    .user {
                        margin: 0 10px;
                        padding: 6px;
                        // width: 60px;
                        color: #fff;
                        font-size: 18px;
                        border: 3px solid transparent;
                        // border: 4px solid #fff;
                        border-radius: 24px;
                    }
                    .user:hover {
                        border: 3px solid #fff;
                        background: linear-gradient(
                            rgba(0, 239, 255, 1) 0%,
                            rgba(87, 115, 255, 1) 46%,
                            rgba(255, 0, 122, 1) 100%
                        );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .login {
                        // padding: 10px 15px;
                    }
                    .social {
                        a {
                            display: block;
                            margin-bottom: 3px;
                            font-size: 30px;
                            color: #000;
                        }
                        a:hover {
                            opacity: 0.7;
                        }
                    }
                }
            }
        }
    }
}
</style>
