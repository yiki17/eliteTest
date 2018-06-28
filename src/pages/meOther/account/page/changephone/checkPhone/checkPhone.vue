<template>
    <div>
        <div class="phone-title">
            输入验证码
        </div>
        <div class="phone-Number">
            <input 
            :data-idx="idx"
            :value="item"
            @input="inputChange"
            @focus="inputFocus"
            @keyup="inputkeyUp"
            v-for="(item,idx) in focusArr" 
            :focus="idx==focusNum"
            :key="idx" 
            type="number" 
            class="inputNumer" maxlength="1">
        </div>
        <div class="phone-btn">
            <button class="phone-confirmCode" @click="confirmCode">确认</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      focusNum: 0,
      focusAll: 5,
      focusArr:['','','','','',''],
    }
  },
  onShow() {
      this.focusNum = 0
  },
  methods: {
    inputChange(e) {
      console.log(e)
      let value = e.mp.detail.value
      let idx = e.mp.target.dataset.idx
      this.focusArr[idx] = value
      if (value && idx !=  this.focusAll) {
        // this.focusNum = -1
        this.focusNum = idx + 1;
      }
    },
    inputFocus(e) {
        let idx = e.mp.target.dataset.idx
        // console.log(this.inputNumber)
    },
    inputkeyUp(e) {
        console.log(e)
    },
    confirmCode() {
        wx.showToast({
            title: '验证成功',
            icon: 'success',
            success () {
                setTimeout(()=>{
                    wx.navigateBack({
                        delta: 2
                    })
                },1000)
            }
        })
        console.log(this.focusArr)
    }
  }
};
</script>

<style lang="stylus" scoped>
.phone-title 
    margin: 50px 0
    text-align: center
.phone-Number 
    display: flex
    margin: 0px 20px
    .inputNumer 
        flex: 1;
        border-bottom: 1px solid #cccccc
        text-align: center
        &:not(:first-of-type)
            margin-left: 20px
.phone-btn
    position absolute
    left 20px
    right 20px
    bottom 20px
    .phone-confirmCode
        border-radius 10px
</style>