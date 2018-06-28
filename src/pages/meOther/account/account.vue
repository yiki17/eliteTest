<template>
    <div>
        <div class="weui-cells">
            <navigator url="./page/changeName/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    用户名
                    <div class="text-padding">{{user.nickName}}</div>
                </div>
                <div class="weui-cell__ft">修改</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            <navigator url="./page/changephone/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                    绑定手机号
                    <div class="text-padding">{{user.telephone || '无'}}</div>
                </div>
                <div class="weui-cell__ft">修改</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user:{}
        }
    },
    mounted () {
        this.user = this.$store.state.user
    }
}
</script>

<style lang="stylus" scoped>
    .weui-cells
        .text-padding
            color #999
            font-size 14px
</style>
