<template>
    <div id="app">
        <header-nav :maskFlag="maskFlag"></header-nav>
        <div id="main" @click="sweepMask">
            <transition mode="out-in" name="fade" @before-enter="beforeEnter" @after-enter="afterEnter">
                <router-view/>
            </transition>
        </div>
        <footer id="app-footer">
        本博客由 Spring 提供支持<br>
        邮箱：lishumin151@163.com
        </footer>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file client根组件
     */

    import HeaderNav from '@/components/common/HeaderNav'

    export default {
        name: 'App',
        components: {
            HeaderNav
        },
        data() {
            return {
                maskFlag: false
            }
        },
        methods: {
            sweepMask() {
                this.maskFlag = !this.maskFlag
            },
            afterEnter() {
                const footer = document.getElementById('app-footer')
                footer.className = 'solid'
            },
            beforeEnter() {
                const footer = document.getElementById('app-footer')
                footer.className = 'trans'
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        font-weight: 200;
        width: 95%;
        text-align: center;
        font-size: 1.4rem;
        margin: 0 auto;
        padding: 1em 0;
        color: $special;
        box-shadow: 0 -1px 0 rgba(100, 100, 100, .9);
        .github {
            color: $base;
        }
    }

    .trans {
        opacity: 0;
    }

    .solid {
        opacity: 1;
    }
</style>
