<template>
    <BlogMainHeader></BlogMainHeader>
    <div class="blog-main">
        <main>
            <div class="main">
                <BlogMainHero></BlogMainHero>
            </div>
        </main>
    </div>
    <BlogMainFooter></BlogMainFooter>
</template>

<script setup>
import BlogMainHeader from '@/components/Nav/BlogMainHeader.vue'
import BlogMainFooter from '@/components/BlogMainFooter.vue'
import BlogMainHero from '@/components/Main/BlogMainHero.vue'
</script>

<style lang="less" scoped>
.blog-main {
    background: rgb(15, 11, 48);
    main {
        .main {
            padding-top: 60px;
            position: relative;
        }
    }
}
</style>
