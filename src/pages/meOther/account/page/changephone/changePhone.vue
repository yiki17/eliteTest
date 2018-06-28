<template>
    <div>
        <div class="phone-title">输入新的手机号</div>
        <div class="phone-content">
            <picker class="phoneArea" mode="selector" :range="phoneArea" @change="changeSelect">{{getPhoneArea}}</picker>
            <input class="phoneInp" type="number" focus="true" v-model="phone">
        </div>
        <div class="phone-btn">
            <button class="phone-sendCode" @click="sendCode">发送验证码</button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                phoneSelect: 0,
                phone:'',
                phoneArea: ['中国 +86', '澳洲 +61']
            }
        },
        computed: {
            getPhoneArea() {
                return this.phoneArea[this.phoneSelect]
            }
        },
        methods: {
            changeSelect(e) {
                this.phoneSelect = parseInt(e.mp.detail.value)
            },
            sendCode() {
                this.$store.commit('changeUserStatus',{
                    key: 'telephone',
                    value: this.phone
                })
                wx.navigateTo({
                    url: './checkPhone/main'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .phone-title
        margin 50px 0
        text-align center
    .phone-content
        display flex
        margin 20px
        .phoneArea
            border 1px solid #cccccc
            padding 5px 10px
            border-radius 10px
            font-size 14px
        .phoneInp
            flex 1
            margin-left 10px
            border 1px solid #cccccc
            font-size 14px
            padding 5px 2em
    .phone-btn
        position absolute
        left 20px
        right 20px
        bottom 20px
        .phone-sendCode
            border-radius 10px
</style>
