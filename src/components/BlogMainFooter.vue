<template>
    <footer id="footer">
        <p class="license">版权声明</p>
        <p class="copyright">此网站内容版权为个人团队所拥有，保留所有权利</p>
    </footer>
</template>

<script setup></script>

<style lang="less" scoped>
#footer {
    border-top: 1px solid rgb(4, 233, 255);
    padding: 24px 0;
    background: rgb(4, 63, 114);
    background: linear-gradient(
        103deg,
        rgba(4, 63, 114, 1) 50%,
        rgba(36, 37, 93, 1) 69%,
        rgba(54, 27, 91, 1) 86%,
        rgba(93, 13, 107, 1) 100%
    );
    p {
        margin: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 300;
        color: #fff;
    }
}
</style>
