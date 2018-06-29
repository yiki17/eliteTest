<template>
    <div>
        <div class="tips">
            成为会员后，您可以使用以下功能：使用智能打包功能，轻松拆分包裹，记录包裹，多达每日9个包裹查询记录，可追查3个月以内的订单。
        </div>
        <div class="login-wrapper">
            <button open-type="getPhoneNumber" @getphonenumber="getPhone">成为会员</button>
        </div>
    </div>
</template>

<script>
    import {showModal} from '@/util'
    export default {
        methods: {
            getPhone(e) {
                console.log(e)
                if(e.mp.detail.encryptedData){
                    this.$emit('changeStatus',true)
                }else{
                    showModal('失败','授权手机号之后才能成为会员')
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .tips
        margin 50px 20px
    .login-wrapper
        position absolute
        bottom 10px
        left 10px
        right 10px
</style>
