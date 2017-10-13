<template>
  <div>

    <Mheader></Mheader>
    <payway @payTypePass="getType"></payway>
    <moneylist @choiceMoneyPost="choiceMoneyVal"></moneylist>
    <div class="chongzhibtn" @click="toPay">充值</div>
    <div class="desc">充值遇到问题<a href="javascript:;">点此意见反馈</a></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from './Mheader'
  import payway from './payway'
  import moneylist from './moneylist'
  export default {
    props: {},
    data() {
      return {
        postType: 1,
        payMoney: 10
      }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
      getType(info) {
        this.postType = info;
      },
      choiceMoneyVal(item) {
        this.payMoney = parseInt(item.money)
      },
      toPay() {
        if (this.postType == 1) {
          console.log('zhifubao')
        } else {
          console.log('weixin')
        };
      }
    },
    watch: {},
    components: {
      Mheader,
      payway,
      moneylist
    }
  }
</script>

<style scoped lang="scss">
  $base:75;
  .chongzhibtn {
    width: 697rem/$base;
    height: 76rem/$base;
    line-height: 76rem/$base;
    background-color: #ffae00;
    color: #fff;
    font-size: 32rem/$base;
    border-radius: 40rem/$base;
    margin: 0 auto;
    text-align: center;
    margin-top: 30rem/$base;
  }
  .desc{
    padding-top: 28rem/$base;
    font-size: 24rem/$base;
    text-align: center;
    color:#999;
    a{
      color:#ffae00;
    }
  }
</style>
