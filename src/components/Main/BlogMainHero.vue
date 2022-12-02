<template>
    <section id="hero">
        <h1>欢迎来到BoBoShu</h1>
        <p>易学易用，性能出色，适用场景丰富的博客网站。</p>
        <div class="btn-bg">
            <button class="btn">GO!Start</button>
        </div>
    </section>
</template>

<script setup></script>

<style lang="less">
#hero {
    width: 100%;
    height: 1082px;
    padding: 96px 32px;
    text-align: center;
    overflow: hidden;
    background: url(../../assets/imgs/Asset.png) no-repeat;
    h1 {
        font-size: 76px;
        background: linear-gradient(
            rgba(0, 239, 255, 1) 0%,
            rgba(87, 115, 255, 1) 46%,
            rgba(255, 0, 122, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p {
        margin: 0 auto 40px;
        font-size: 18px;
        color: #fefefe;
    }
    // 给边框加色彩
    .btn-bg {
        width: 293px;
        height: 72px;
        position: relative;
        border: 4px solid transparent;
        margin: 0 auto;
        border-radius: 60px;
        background-clip: padding-box;
        background: rgb(0, 239, 255);
        background: linear-gradient(
            90deg,
            rgba(0, 239, 255, 1),
            rgba(87, 115, 255, 1),
            rgba(255, 0, 122, 1)
        );
        // background: linear-gradient(to right, #8f41e9, #578aef);
        .btn {
            height: 100%;
            width: 100%;
            border-radius: 60px;
            color: #fefefe;
            font-size: 30px;
            font-weight: 600;
            border: 2px solid transparent;
            background: rgb(17, 12, 51);
        }
        .btn:hover {
            color: rgb(0, 239, 255);
        }
    }
    .btn-bg::before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        margin: -4px 0;
        border-radius: inherit;
    }
}
</style>
