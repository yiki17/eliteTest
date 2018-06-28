<template>
    <div class="home">
        <div class="search">
            <div class="tobaike" @click="tobaike">百科</div>
            <div class="search-bar">
                <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
                <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal"  />
                <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
                    <icon type="clear" size="14"></icon>
                </div>
            </div>
            <div class="scan" @click="scanGoods"><span class="iconfont icon-richscan_icon icon"></span></div>
        </div>
        <ul class="goodList" v-if="goodslist.length">
            <li class="item" v-for="item in goodslist" :key="item.id">
                <img class="item-image" :src="item.pic" mode="aspectFill" alt="">
                <div class="item-title">{{item.title}}</div>
                <div class="addGoods">
                    +
                </div>
            </li>
        </ul>
        <div class="tips" v-if="!more">
            - 无更多商品 -
        </div>
    </div>
</template>

<script>
import config from '@/config'
export default {
    created(){
        this.pageNum = 10
    },
    data () {
        return {
            page: 1,
            more: true,
            goodslist: [],
            inputVal: ''
        }
    },
	mounted () {
        let config = wx.getStorageSync('config') || {}
        if(!config.baikeHide){
            console.log('baikehide')
            wx.navigateTo({
                url: '/pages/webview/main'
            })
        }
        this.getList()
    },
    onPullDownRefresh () {
        this.getList(true)
    },
    onReachBottom () {
        if(this.more){
            this.page++
            this.getList()
        }
    },
    methods: {
        //清除input
        clearInput () {
            this.inputVal = ''
        },
        tobaike () {
            wx.navigateTo({
                url: '/pages/webview/main'
            })
        },
        async getList(init) {
            if(init){
                this.page = 1
                this.more = true
            }
            let res = await this.$fly.get(config.url,{page:this.page})
            if( res.status === 200) {
                let list = res.data.data
                if(list.length === 0 || list.length < this.pageNum) {
                    this.more = false
                }
                if(init){
                    wx.stopPullDownRefresh()
                    this.goodslist = list
                }else{
                    this.goodslist.push(...list)
                }
            }
            console.log(this.goodslist)
        },
        scanGoods() {
            wx.scanCode({
                success(res) {
                    console.log(res)
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .search
        display flex
        align-items center
        // height 28px
        // line-height 28px
        .tobaike
            border 1px solid #000
            padding 0 10px
            &:active
                background #e6e6e6
        .search-bar
            flex 1
            position relative
            padding-left: 30px
            padding-right: 30px
            border 1px solid #000
            border-radius 10px
            margin 0 10px
            // box-sizing border-box
        .serchInp
            flex 1
        .scan
            margin-right 10px
            .icon
                font-size 25px
    .goodList
        .item
            display flex
            align-items center
            padding 10px 20px
            .item-image
                width 50px
                height 50px
            .item-title
                flex 1
                margin-left 20px
            .addGoods
                width 20px
                height 20px
                border 1px solid #999
                border-radius 50%
                font-size 20px
                text-align center
                line-height 20px
    .tips
        color #999
        text-align center
</style>
