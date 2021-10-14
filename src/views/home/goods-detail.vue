<template>
  <div class="goods-detail" ref="detailbodyScroll">
    <div class="header">
        <navbar ref="homenav">
             <div slot="left" class="nav-left" @click="goback()">
                <img src="@/assets/img/return-black-icon.png">
            </div>
            <div slot="center" class="center-title">
                <div v-for="(item,index) in ['商品','评论','详情','推荐']" :key="index" class="title-item">
                    <span @click.stop="clickthis(index)" :class="tagIndex == index?'title-active':''">{{item}}</span>
                </div>
            </div>
        </navbar>
    </div>
    <div class="goods-item-detail">
        <div class="goods-img" ref="goods">
            <van-swipe @change="onChange">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" @click="imagePreviewBtn(index)"/>
                </van-swipe-item>
                 <template #indicator>
                    <div class="custom-indicator">{{ current + 1 }}/{{images.length}}</div>
                </template>
            </van-swipe>
        </div>
        <div class="goods-item-content">
            <div class="goods-name">2021春秋冬白色T袖子长袖女2021春秋冬白色T袖子长袖女</div>
            <div class="goods-price">
                <span class="count-price">￥109.99</span>
                <span class="old-price">155.7</span>
                <span class="today-count">火热促销</span>
            </div>
            <div class="goods-content-bottom">
                <span>销量 16677</span>
                <span>收藏 853</span>
                <span>72小时发货</span>
            </div>
        </div>
        <div class="goods-parameters">
            <div class="parameter-item" @click="isshow=true">
                <span>选择</span>
                <span>颜色分类/尺码</span>
                <van-icon name="arrow" color="#ccc" />
            </div>
            <div class="parameter-item">
                <span>发货</span>
                <span>广东广州 |  快递：快递包邮</span>
                <van-icon name="arrow" color="#ccc" />
            </div>
            <div class="parameter-item" @click="serviceShow=true">
                <span>保障</span>
                <span>7天无理由退换货  付款后72小时内发货</span>
                <van-icon name="arrow" color="#ccc" />
            </div>
            <div class="parameter-item" @click="paramsShow=true">
                <span>参数</span>
                <span>质地尺码...</span>
                <van-icon name="arrow" color="#ccc" />
            </div>
        </div>
        <div class="goods-evaluate" ref="evaluate">
            <div class="evaluate-top">
                <span>宝贝评价(999+)</span>
                <div @click="gopage('/detail/evaluate-echart')">查看更多 <van-icon name="arrow" /></div>
            </div>
            <div class="evaluate-text" v-for="(item,index) in evaluateList" :key="index">
                <div class="text-title">
                    <van-image round width="45px" height="45px" :src="item.image"/>
                    <span>用户{{index+1}}</span>
                </div>
                 <div class="text-content">
                     {{item.content}}
                </div>
                
            </div>
        </div>
        <div class="goods-shop">
            <div class="goods-shop-top">
               <div class="div-top">
                    <div class="shop-top-left">
                        <van-image round width="45px" height="45px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                        <div>
                            <span>小新家</span>
                            <van-icon name="gem" color="orange"/>
                            <van-icon name="gem" color="orange"/>
                            <van-icon name="gem" color="orange"/>
                            <van-icon name="gem" color="orange"/>
                        </div>
                    </div>
                    <div class="shop-top-right">
                        <div>宝贝描述4.8  <span>高</span></div>
                        <div>卖家服务4.8  <span>高</span></div>
                        <div>物流服务4.9  <span>高</span></div>
                    </div>
               </div>
                <div class="shop-top-bottom">
                    <span @click="gopage('')">进店逛逛</span>
                    <span @click="gopage('')">全部宝贝</span>
                </div>
            </div>
           
            
        </div>
        <div class="goods-detail-item" ref="detail">
            <van-divider :style="{ color: '#333', borderColor: '#ff5000', padding: '0 100px' }">
                商品详情
            </van-divider>
            <div v-for="(item,index) in images" :key="index">
                <div v-if="index < 4">
                    <img :src="item">
                </div>
            </div>
        </div>
        <div class="goods-recommend" ref="recommend">
            <van-divider :style="{ color: '#333', borderColor: '#ff5000', padding: '0 100px' }">
                商品推荐
            </van-divider>
            <div class="recommend-item">
                <div v-for="(item,index) in images" :key="index">
                    <img :src="item">
                    <span>2021春秋冬白色T袖子长袖女2021春秋冬白色T袖子长袖女</span>
                    <span>￥59.9</span>
                </div>
            </div>
        </div>
        <div class="goods-item-bottom">
        </div>

    </div>
    <div class="footers">
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="gopage('')"/>
            <van-goods-action-icon icon="cart-o" text="购物车" @click="gopage('')"/>
            <van-goods-action-icon icon="star" :text="collectText" :color="collectcolor" @click="collect"/>
            <van-goods-action-button type="warning" text="加入购物车"  @click="gopage('')"/>
            <van-goods-action-button type="danger" text="立即购买"  @click="gopage('')"/>
        </van-goods-action>
		<!-- <div class="footers-item">
			<div>
				<van-icon name="service-o" size="24" color="#444"/>
			</div>
            <div>客服</div>
		</div>
		<div class="footers-item" @click="gopage('')" >
			<div>
				<van-icon name="shop-o" size="24" color="#444"/>
			</div>
            <div>店铺</div>
		</div>
		<div class="footers-item" @click="collect('')">
			<div>
				<van-icon name="star" size="24" :color="collectcolor" />
			</div>
            <div>{{collectText}}</div>
		</div>
		<div class="footers-item footers-cart" @click="gopage('')" >
			<span>加入购物车</span>
		</div>
		<div class="footers-item footers-buy" @click="gopage('')" >
			<span>立即购买</span>
		</div> -->
	</div>
    <div class="service-guarantee">
        <van-action-sheet v-model="serviceShow" title="服务保障">
            <div class="services-pop">
				<div class="services-item">
					<van-icon name="passed" color="red"/>
					<span>  退货补货费</span>
				</div>
				<div class="services-pop-text">
					本店承诺 客户在7天内的退换货，邮费均由本店承担
				</div>
				<div class="services-item">
					<van-icon name="passed"  color="red"/>
					<span>  全国包邮</span>
				</div>
				<div class="services-pop-text">
					本店承诺全国地区包裹邮寄包邮，新疆等物流偏远地区除外
				</div>
				<div class="services-item">
					<van-icon name="passed" color="red"/>
					<span>  7天无理由退货</span>
				</div>
				<div class="services-pop-text">
					包裹到取件点后,店铺接受用户7天无理由退换货
				</div>
				<div class="services-item">
					<van-icon name="passed" color="red"/>
					<span>  72小时内发货</span>
				</div>
				<div class="services-pop-text">
					下单后 本店会在72小时内发货
				</div>
			</div>
        </van-action-sheet>
        <van-action-sheet v-model="paramsShow">
            <div class="services-pop">
				<div class="service-ctn-item">
                    <span>品牌</span>
                    <span>GOOD BAI</span>
                </div>
				<div class="service-ctn-item">
                    <span>适用年龄</span>
                    <span>18-59</span>
                </div>
				<div class="service-ctn-item">
                    <span>尺码</span>
                    <span>S/M/L/XL</span>
                </div>
				<div class="service-ctn-item">
                    <span>面料</span>
                    <span>棉</span>
                </div>
				<div class="service-ctn-item">
                    <span>风格</span>
                    <span>通勤</span>
                </div>
				<div class="service-ctn-item">
                    <span>年份季节</span>
                    <span>2021夏季</span>
                </div>
				<div class="service-ctn-item">
                    <span>材质成分</span>
                    <span>100%纯棉</span>
                </div>
			</div>
        </van-action-sheet>
    </div>
    <!-- <van-sku v-model="isshow" stepper-title="我要买" :sku="sku" :goods="goods" :goods-id="goodsId"
        :quota="quota" :quota-used="quotaUsed" :hide-stock="sku.hide_stock" show-add-cart-btn
        reset-stepper-on-hide :initial-sku="initialSku" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked">
        自定义 sku-header-price
        <template #sku-header-price="props">
            <div class="van-sku__goods-price">
            <span class="van-sku__price-symbol">￥</span
            ><span class="van-sku__price-num">{{ props.price }}</span>
            </div>
        </template>
        自定义 sku actions
        <template #sku-actions="props">
            <div class="van-sku-actions">
            <van-button square size="large" type="warning" @click="onPointClicked">
                积分兑换
            </van-button>
            直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调
            <van-button square size="large" type="danger" @click="props.skuEventBus.$emit('sku:buy')">
                买买买
            </van-button>
            </div>
        </template>
    </van-sku> -->

  </div>
</template>

<script>
  import navbar from '@/components/common/navbar/navbar'
  import { ImagePreview, Toast } from 'vant';
  import goodslist from './goods-list'
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {
    name:'home',
    data() {
       return {
            id:'',
            tagIndex:0,
            images: [
                'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
            ],
            serviceShow:false,
            paramsShow:false,
            collectcolor:'#bbb',
            iscollect:false,
            collectText:'收藏',
            current: 0,
            isshow:false,
            navHeight:'',
            goodsTop:'',
            detailTop:'',
            evaluateTop:'',
            recommendTop:'',
            isActive:false,
            evaluateList :[
                {   image:'https://img2.baidu.com/it/u=1660422566,187228173&fm=26&fmt=auto&gp=0.jpg',
                    content:'真的超级喜欢，非常支持，质量非常好，与卖家描述的完全一致，'+
                 '非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。'},
                {   image:'https://img01.yzcdn.cn/vant/cat.jpeg',
                    content:'包装严实没泄露，味道尚好，颜色很闪亮，色泽和图片上的一样，超赞。'},
                {   image:'https://img0.baidu.com/it/u=2848151259,330236343&fm=26&fmt=auto&gp=0.jpg',
                    content:'收到很惊喜，质量好，手感舒适，上身效果也很好，很修身。而且这个价格能买到，性价比真高！还会再来！'},
                {   image:'https://img1.baidu.com/it/u=2438864829,3057510527&fm=26&fmt=auto&gp=0.jpg',
                    content:'东西很好，价美物廉，谢谢掌柜的！说实在，这是我淘宝购物来让我最满意的一次购物。无论是掌柜的态度还是对物品，我都非常满意的。'},
            ],
            serviceList: [
                {
                    title:'退货补货费',
                    content:'本店承诺 客户在7天内的退换货，邮费均由本店承担',
                },
                {
                    title:'全国包邮',
                    content:'本店承诺全国地区包裹邮寄包邮，新疆等物流偏远地区除外',
                },
                {
                    title:'7天无理由退换货',
                    content:'本店承诺 包裹到店后,店铺接受用户7天无理由退换货',
                }
            ],
            offsetTopList: [],
       }
    },
    components:{
        navbar,
    },
    computed: {
        ...mapState({
          detailScrolltTop: (state) => state.detailScrolltTop,
        })
    },
   
    created(){
        this.id = Number(this.$route.query.id);
        if(this.id < 4 && this.id > 1){
            this.images=[
                'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
                'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
                'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
            ]
        }else if(this.id >= 4){
            this.images=[
                'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
            ]
        }
    },

    //在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等
    activated() {
        setTimeout(() => {
          this.$refs.detailbodyScroll.scrollTop = this.detailScrolltTop
        }, 1)
    },

    mounted(){
        window.addEventListener("scroll", this.scrollHander, true); // 监听页面滚动事件
        //获取 切换标签tabctrl的offsetTop
        //所有的组件都有属性$el 用于获取组件中的元素
        this.navHeight = this.$refs.homenav.$el.offsetHeight
        this.goodsTop = this.$refs.goods.offsetTop
        this.recommendTop = this.$refs.recommend.offsetTop
        this.evaluateTop = this.$refs.evaluate.offsetTop
        this.detailTop = this.$refs.detail.offsetTop
        this.offsetTopList = []
        this.offsetTopList.push(this.goodsTop)
        this.offsetTopList.push(this.evaluateTop)
        this.offsetTopList.push(this.detailTop)
        this.offsetTopList.push(this.recommendTop)
    },
    beforeDestroy() {
        //销毁这个监听要不然会在其他的页面中 执行 报错
        window.removeEventListener("scroll", this.scrollHander, true);
    },
       //保持 详情页页面 状态
    beforeRouteLeave(to, from, next) {
        this.setState([{
            "name": 'detailScrolltTop',
            "value": this.$refs.detailbodyScroll.scrollTop
        }])
        next();
    },
    methods: {
        ...mapMutations(['setState']),
        goback(){
            this.$router.go(-1)
        },
        gopage(path){
            this.$router.push({
                path:path
            })
        },
        collect() {
            this.iscollect = !this.iscollect
            if(this.iscollect){
                this.collectcolor = '#ff5000'
                this.collectText = '取消收藏'
                Toast('收藏成功')
            }else{
                this.collectcolor = '#bbb'
                this.collectText = '收藏'
                Toast('取消收藏成功')  
            }
        },
        onChange(index) {
            this.current = index;
        },
        scrollHander() {
            let scrollTop = this.$refs.detailbodyScroll.scrollTop
            // let top = this.offsetTopList[index] - this.navHeight
            if(scrollTop >= 300){
            }
        },
       clickthis(index) {
            this.tagIndex = index;
            this.$refs.detailbodyScroll.scrollTop = this.offsetTopList[index] - this.navHeight
          
            // if(scrollTop >= top){
            //     console.log(scrollTop)
            // }
        },
        imagePreviewBtn(index) {
			ImagePreview({
				images: this.images,
				startPosition: index,
			})
		},
    }
  }
</script>
<style lang="less">
    .goods-detail {
        .van-icon {
            vertical-align: text-top;
        }
        .van-divider {
            font-size: 15px;
        }
    }
</style>

<style lang="less" scoped>
 .goods-detail{
    background: #eee;
    height: 100vh;
    overflow-y: scroll;
    .header {
		padding-top: 44px;
		overflow: hidden;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
		background: #fff;
        vertical-align: middle;
        .nav-left {
            margin-left: 12px;
            width: 14px;
            img{
                width: 18px;
                height: 18px;
                vertical-align: middle;
            }
        }
        .center-title {
            display: flex;
        }
        .title-item {
            flex: 1;
            .title-active{
                color: red;
            }
        }

	}
    .goods-item-detail {
        margin-top: 88px;
        padding-bottom: 44px;
        img{
            width: 100%;
            height: 200px;
        }
        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
            color: #444;
        }
        .goods-item-content{
            background: #fff;
            margin: 5px 10px;
            border-radius: 5px;
            padding: 10px 10px;
            .goods-name{
                font-size: 15px;
            }
            .goods-price{
                margin-top: 10px;
                font-weight: 400;
                position: relative;
                .count-price{
                    color: red;
                    font-size: 18px;
                    font-weight: 600;
                }
                .old-price {
                    color: gray;
                    text-decoration: line-through;
                    margin-left: 5px;
                    font-size: 13px;
                    margin-right: 5px;
                }
                .today-count {
                    background: rgb(221, 54, 54);
                    padding: 2px 4px;
                    color: white;
                    font-size: 10px;
                    border-radius: 10px;
                    position: absolute;
                    top: -5px;
                }
            }
            .goods-content-bottom {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                font-size: 13px;
                span{
                    flex: 1;
                    color: #999;
                    text-align: center;
                    &:first-child{
                        text-align: left;
                    }
                    &:last-child{
                        text-align: right;
                    }
                }
            }
        }
        .goods-parameters {
            background: #fff;
            margin: 5px 10px;
            border-radius: 5px;
            padding:0 10px 10px;
            .parameter-item {
                padding: 25px 0;
                font-size: 14px;
                position: relative;
                span{
                    float: left;
                    &:first-child {
                        color: #999;
                        margin-right: 20px;
                        width: 30px;
                    }
                }
                .van-icon {
                    position: absolute;
                    width: 30px;
                    vertical-align: middle;
                    right: 0;
                    top: 27px;
                }
            }
        }
        .goods-evaluate {
            font-size: 13px;
            background: #fff;
            margin:10px;
            border-radius: 5px;
            padding: 10px 10px 20px;
            .evaluate-top{
                display: flex;
                justify-content: space-between;
                div{
                    color:#ff2600;
                }
            }
            .evaluate-text {
                margin-top: 15px;
                .text-title{
                    display: flex;
                    align-items: center;
                    span{
                        margin-left: 10px;
                        color: #555;
                    }
                }
                .text-content {
                    color: #777;
                    margin-top: 10px;
                }
            }
        }
        .goods-shop {
            margin:10px;
            padding: 10px 10px 15px;
            background: #fff;
            border-radius: 5px;
            .goods-shop-top {
                padding-bottom: 10px;
                .div-top{
                    display: flex;
                    .shop-top-left{
                        flex: 1;
                        display: flex;
                        span{
                            display: block;
                            margin-bottom: 5px;
                        }
                        .van-image {
                            margin-right:20px
                        }
                    }
                    .shop-top-right{
                        flex: 1;
                        font-size: 11px;
                        text-align: center;
                        line-height: 18px;
                        color: #444;
                        span{
                            color: rgb(255, 60, 0);
                        }
                    }
                }
                .shop-top-bottom {
                    text-align: center;
                    font-size: 12px;
                    margin-top: 10px;
                    span{
                        padding: 5px;
                        border: 1px solid rgb(255, 38, 0);
                        letter-spacing: 1px;
                        color: rgb(255, 38, 0);
                        border-radius: 20px;
                        &:last-child{
                            margin-left: 20px;
                        }
                    }
                }
            }
        }
        .goods-detail-item {
            background: #fff;
            padding: 5px 10px;
            margin:10px;
            border-radius: 5px;
            div{
                margin-bottom: 10px;
            }
        }
        .goods-recommend {
            background: #fff;
            padding: 5px 15px;
            margin:10px;
            border-radius: 5px;
            
            .recommend-item {
                min-height: 100px;
                width: 100%;
                div {
                    display: inline-block;
                    width: calc(50% - 26px);
                     margin-left: 18px;
                     margin-bottom: 10px;
                    img{
                        width: 100%;
                        border-radius: 10px;
                        height: auto;
                    }
                    span{
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #333;
                        font-size: 13px;
                        display: inline-block;
                        margin-top: 5px;
                        &:last-child {
                            color: red;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    
    .service-guarantee {
        .services-pop{
            padding: 16px 16px 16px;
            .services-item{
                font-size: 13px;
                line-height: 30px;
            }
            .services-pop-text{
                font-size: 14px;
                color: #666;
                padding: 10px 0;
                line-height: 18px;
            }
            .service-ctn-item {
                display: flex;
                align-items: center;
                font-size: 13px;
                padding: 15px 0;
                border-bottom: 1px solid #eee;
                &:last-child {
                    border-bottom: none;
                }
                span{
                    &:first-child{
                        width: 100px;
                    }
                    &:last-child {
                        color: #999;
                        flex: 1;
                    }
                }
            }
        }
    }
    .footers {
        display: flex;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: center;
        
        .footers-item {
            text-align: center;
            flex: 1;
            color: #555;
            padding: 5px 0 2px 0;
            font-size: 13px;
            
        }
        .footers-cart {
            padding: 5px;
            background: orange;
            color: white;
            border-radius: 20px 0 0 20px;
        }
        .footers-buy {
            background: rgb(228, 8, 8);
            color: white;
            border-radius: 0 20px 20px 0;
            padding: 5px;
            span{
                display: inline-block;
                margin: 0 auto;
            }
        }
    }
 }
</style>
