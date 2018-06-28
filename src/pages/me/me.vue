<template>
    <div>
        <div class="content" v-if="!loginSucess">
            <img class="content-image" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1667994205,255365672&fm=5" alt="">
            <!-- <button class="content-login" open-type="getUserInfo" @getuserinfo="getUser">获取授权</button> -->
            <p class="content-text">未知用户</p>
        </div>
        <div class="login-wrapper" v-if="!loginSucess">
            <button class="login-btn" open-type="getUserInfo" @getuserinfo="getUser">微信登录</button>
        </div>
        
        <div class="content" v-if="loginSucess">
            <img class="content-image" :src="userInfo.avatarUrl" alt="">
            <p class="content-text">{{userInfo.nickName}}</p>
        </div>
        <tomember v-if="loginSucess && !memberSucess"></tomember>
        <personmsg v-if="memberSucess"></personmsg>
        <!-- <button open-type="getPhoneNumber" @getphonenumber="getPhone">获取手机号</button> -->
    </div>
</template>

<script>
import personmsg from '@/components/personMsg'
import tomember from '@/components/toMember'
export default {
    data () {
        return {
            loginSucess: false,
            memberSucess: false,
            userInfo: {},
            baikeHide: false
        }
    },
    components: {
        personmsg,
        tomember
    },
    mounted() {
        
    },
    methods:{
        getUser (login) {
            console.log(login.mp.detail.userInfo)
            if(login.mp.detail.userInfo){
                this.$store.commit('upadateUser', login.mp.detail.userInfo)
                console.log(this.$store.state.user)
                this.userInfo = this.$store.state.user
                this.loginSucess = true
            }
        },
        getPhone(e){
            console.log(e)
            wx.login({
                success (e) {
                    wx.getUserInfo()
                }
            })
        },
        toAccountInfo() {
            wx.navigateTo({
                url: '/pages/meOther/account/main'
            })
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
