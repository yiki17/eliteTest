<template>
    <div>
        <div class="tips">
            成为会员后，您可以使用以下功能：使用智能打包功能，轻松拆分包裹，记录包裹，多达每日9个包裹查询记录，可追查3个月以内的订单。
        </div>
        <div class="login-wrapper" v-if="loginSucess">
            <button open-type="getPhoneNumber" @getphonenumber="getPhone">获取手机号</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            getUser
        }
    }
</script>

<style lang="stylus" scoped>
    .login-wrapper
        position absolute
        bottom 10px
        left 10px
        right 10px
</style>
