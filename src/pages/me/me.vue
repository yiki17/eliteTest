<template>
    <div>
        <div class="content" v-if="!loginSucess">
            <img class="content-image" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1667994205,255365672&fm=5" alt="">
            <!-- <button class="content-login" open-type="getUserInfo" @getuserinfo="getUser">获取授权</button> -->
            <p class="content-text">未登录</p>
        </div>
        <div class="login-wrapper" v-if="!loginSucess">
            <button class="login-btn" open-type="getUserInfo" @getuserinfo="getUser">点击登录</button>
        </div>
        <div class="content" v-if="loginSucess">
            <img class="content-image" :src="userInfo.avatarUrl" alt="">
            <p class="content-text">{{userInfo.nickName}}</p>
        </div>
        <div class="weui-cells"  v-if="loginSucess">
            <navigator url="/pages/meOther/account/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">账户信息</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            <!-- <div class="weui-cell" @click="toAccountInfo">
                <div class="weui-cell__bd">账户信息</div>
                <div class="weui-cell__ft">
                    <div class="iconfont icon-iconfonti"></div>
                </div>
            </div> -->
            <div class="weui-cell">
                <div class="weui-cell__bd">是否隐藏商品百科</div>
                <div class="weui-cell__ft">
                    <switch @change="baikeChange" :checked="baikeHide"></switch>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginSucess: false,
            userInfo: {},
            baikeHide: false
        }
    },
    mounted() {
        let config = wx.getStorageSync('config') || {}
        console.log(config)
        if(config){
            this.baikeHide = config.baikeHide
        }
    },
    methods:{
        getUser (login) {
            console.log(login.mp.detail.userInfo)
            if(login.mp.detail.userInfo){
                this.userInfo = login.mp.detail.userInfo
                this.loginSucess = true
            }
        },
        toAccountInfo() {
            wx.navigateTo({
                url: '/pages/meOther/account/main'
            })
        },
        baikeChange(e) {
            console.log(e)
            let value = e.mp.detail.value
            let config = wx.getStorageSync('config') || {}
            config.baikeHide = value
            this.baikeHide = value
            wx.setStorageSync('config',config)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        text-align center
        position relative
        .content-login
            width 200rpx
            height 200rpx
            border-radius 50%
            opacity 0
            position absolute
            left 50%
            top 25px
            transform translate(-50%,0)
        .content-image
            width 200rpx
            height 200rpx
            border-radius 50%
            margin 50rpx auto 0
        .content-text
            text-align center
    .login-wrapper
        position absolute
        bottom 10px
        left 10px
        right 10px
</style>
