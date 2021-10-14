<template>
    <div>
        <div class="table-bar-div" >
            <div class="table-bar-tag" @click="goto('/views/home')">
                <div class="bar-tag-img"><img :src="activateIndex == 1 ? tablebarhomegreenicon : tablebarhomegrayicon"
                        alt=""></div>
                <div :class="activateIndex == 1 ? 'bar-tag-text-activate' : 'bar-tag-text'">首页</div>
            </div>
            <div class="table-bar-tag" @click="goto('/views/category')">
                <div class="bar-tag-img"><img :src="activateIndex == 2 ? tablebarcategorygreenicon : tablebarcategorygrayicon"
                        alt=""></div>
                <div :class="activateIndex == 2 ? 'bar-tag-text-activate' : 'bar-tag-text'">订单</div>
            </div>
            <div class="table-bar-tag" @click="goto('/views/cart')">
                <div class="bar-tag-img"><img :src="activateIndex == 3 ? tablebarcartgreenicon : tablebarcartgrayicon"
                        alt=""></div>
                <div :class="activateIndex == 3 ? 'bar-tag-text-activate' : 'bar-tag-text'">购物车</div>
            </div>
            <div class="table-bar-tag" @click="goto('/views/mine')">
                <div class="bar-tag-img"><img :src="activateIndex == 4 ? tablebarmygreenicon : tablebarmygrayicon"
                        alt=""></div>
                <div :class="activateIndex == 4 ? 'bar-tag-text-activate' : 'bar-tag-text'">我的</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            nowrouter: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                tablebarhomegrayicon: require('@/assets/img/tabbar/tab-home-icon.png'),
                tablebarhomegreenicon: require('@/assets/img/tabbar/tab-home-light-icon.png'),
                tablebarcategorygrayicon: require('@/assets/img/tabbar/tab-category-icon.png'),
                tablebarcategorygreenicon: require('@/assets/img/tabbar/tab-category-light-icon.png'),
                tablebarcartgrayicon: require('@/assets/img/tabbar/tab-my-icon.png'),
                tablebarcartgreenicon: require('@/assets/img/tabbar/tab-my-light-icon.png'),
                tablebarmygrayicon: require('@/assets/img/tabbar/tab-my-icon.png'),
                tablebarmygreenicon: require('@/assets/img/tabbar/tab-my-light-icon.png'),
                activateIndex: 0,
            }
        },
        created() {
            if (this.nowrouter == '/views/home') {
                this.activateIndex = 1
            }else if (this.nowrouter == '/views/category') {
                this.activateIndex = 2
            }else if (this.nowrouter == '/views/cart') {
                this.activateIndex = 3
            }else if (this.nowrouter == '/views/mine') {
                this.activateIndex = 4
            }
        },
        methods: {
            goto(path) {
                if (location.pathname != path) {
                    this.$router.push({
                        path: path
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .table-bar-div {
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 6px 0 3px;
        background-color: #ffffff;

        .table-bar-tag {
            margin: 0 50px;

            .bar-tag-img {
                width: 24px;
                height: 24px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .bar-tag-text,
            .bar-tag-text-activate {
                display: inline-block;
                white-space: nowrap;
                width: auto;
                height: 14px;
                font-size: 10px;
                font-weight: 600;
                color: #DDDDDD;
                line-height: 14px;
                margin-top: 2px;
            }

            .bar-tag-text-activate {
                color: #00E6BF;
            }
        }
    }
</style>