<template>
    <div>
        <div class="weui-cells" >
            <navigator url="/pages/meOther/account/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd">账户信息</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
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
    data() {
        return {
            baikeHide: false
        }
    },
    mounted(){
        let config = wx.getStorageSync('config') || {}
        console.log(config)
        if(config){
            this.baikeHide = config.baikeHide
        }
    },
    methods: {
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

<style scoped>
</style>