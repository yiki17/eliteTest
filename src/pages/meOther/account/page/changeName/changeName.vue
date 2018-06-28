<template>
    <div>
        <div class="name-warapper">
            <input v-model="name" :focus="true" class="nameInput" type="text" confirm-type="send" @confirm="changeName">
            <p class="tips">好名字可以让你的朋友更容易记住你。</p>
        </div>
        <div class="btn-wrapper">
            <button class="changeName" @click="changeName">保存</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:''
        }
    },
    mounted() {
        this.name = this.$store.state.user.nickName
    },
    methods: {
        changeName() {
            if (!this.name) {
                wx.showModal({
                    title: '修改错误',
                    content: '用户名不能为空',
                })
                return
            }
            this.$store.commit('changeUserStatus',{
                key: 'nickName',
                value: this.name
            })
            wx.showToast({
                title: '修改成功',
                icon: 'success',
                success () {
                    setTimeout(()=>{
                        wx.navigateBack({
                            delta: 1
                        })
                    },1000)
                }
            })
            
        }
    }
}
</script>

<style lang="stylus">
    page
        background rgb(247,248,248)
</style>


<style lang="stylus" scoped>
    .name-warapper
        margin 15px
        .nameInput
            padding-bottom 4px
            border-bottom 1px solid rgb(13,188,121)
        .tips
            margin-top 10px
            font-size 14px
    .btn-wrapper
        position absolute
        left 15px
        right 15px
        bottom 15px
        .changeName
            line-height 40px
</style>
