<template>
    <Transition name="down">
        <div class="my-message" :style="style[type]" v-show="isShow">
            <i class="icon" :class="[style[type].icon]"></i>
            <div class="message-info">
                <div class="info-header">{{ style[type].text }}</div>
                <span class="text">{{ text }}</span>
            </div>
        </div>
    </Transition>
</template>

<script setup name="MyMessage">
import { ref, reactive, onMounted } from 'vue'
const style = reactive({
    success: {
        icon: 'icon-success',
        text: 'Well done!',
        backgroundColor: 'rgb(12, 112, 64)',
        backgroundImage: 'url(../../assets/imgs/greenBubbles.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-45px 66px',
    },
    error: {
        icon: 'icon-error',
        text: 'Oh snap!',
        backgroundColor: 'rgb(199, 44, 65)',
        backgroundImage: 'url(../../assets/imgs/redBubbles.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-45px 66px',
    },
    warn: {
        icon: 'icon-warn',
        text: 'Warning!',
        backgroundColor: 'rgb(252, 134, 33)',
        backgroundImage: 'url(../../assets/imgs/yellowBubbles.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-45px 66px',
    },
    quest: {
        icon: 'icon-quest',
        text: 'Hi there!',
        backgroundColor: 'rgb(0, 112, 224)',
        backgroundImage: 'url(../../assets/imgs/blueBubbles.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-45px 66px',
    },
})
defineProps({
    text: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        // warn 警告  error 错误  success 成功  quest 帮助
        default: 'warn',
    },
})
// 控制动画
const isShow = ref(false)
onMounted(() => {
    isShow.value = true
})
</script>

<style lang="less" scoped>
.down {
    &-enter {
        &-from {
            transform: translate3d(0, -75px, 0);
            opacity: 0;
        }
        &-active {
            transition: all 0.5s;
        }
        &-to {
            transform: none;
            opacity: 1;
        }
    }
}
.my-message {
    position: fixed;
    width: 438px;
    height: 132px;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 32px;
    z-index: 9999;
    background: url(../../assets/imgs/greenBubbles.png) rgb(12, 112, 64)
        no-repeat -45px 66px;
}
.icon {
    position: absolute;
    top: -40px;
    left: 20px;
    width: 78px;
    height: 78px;
}
.icon-success {
    background: url(../../assets/imgs/icon_success.png);
}
.icon-warn {
    background: url(../../assets/imgs/icon_warning.png);
}
.icon-error {
    background: url(../../assets/imgs/icon_fail.png);
}
.icon-quest {
    background: url(../../assets/imgs/icon_question.png);
}
.message-info {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    top: 20px;
    right: 64px;
    max-width: 244px;
    max-height: 91px;
    color: #fff;
    .info-header {
        text-align: left;
        font-size: 34px;
        font-weight: 500;
    }
    .text {
        text-align: left;
        font-size: 14px;
        font-weight: 400;
    }
}
</style>
