<template>
  <div class="listwrap">
    <div class="top-text1">充值金额：</div>
    <div class="listshow" v-if="datainfo.result">
      <!-- {{datainfo.result}} -->
      <div class="listout">
        <div class="moneyitem" :class="{active:index===defaultNum}" v-for="(item,index) in datainfo.resultBean.infolist" @click="choiceMoney(index,item)">
          <div class="sm1">
            {{parseInt(item.money)}}元
          </div>
          <div class="xm1">
            {{parseInt(item.energy)}}能量
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  Vue.use(VueResource);
  export default {
    props: {
      // bgImage: {
      //   type: String,
      //   default: ''
      // }
    },
    data() {
      return {
        datainfo: {},
        defaultNum:0
      }
    },
    computed: {},
    created() {
      this._initlist();
    },
    mounted() {},
    methods: {
      _initlist() {
        this.$http.jsonp('http://app.ipaychat.com/config!rechargeMoneyPcList.htm', {
          params: {},
          "jsonp": "callback",
          "jsonpCallback": "rechargeMoneyCallBack"
        }).then(response => {
          var dataResult = response.body;
          this.datainfo = Object.assign({}, this.datainfo, dataResult);
        }, response => {
          // error callback
        });
      },
      choiceMoney(index,item){
        this.defaultNum=index;
        this.$emit('choiceMoneyPost',item)
      }
    },
    watch: {},
    components: {}
  }
</script>

<style scoped lang="scss">
  $base:75; //设计稿的尺寸除以10
  .listwrap {
    background-color: #fff;
    margin-top: 20rem/$base;
    overflow: hidden;
    padding-left: 27rem/$base;
  }
  .top-text1 {
    font-size: 20rem/$base;
    color: #999;
    height: 59rem/$base;
    line-height: 59rem/$base;
  }
  .moneyitem {
    float: left;
    width: 218rem/$base;
    height: 100rem/$base;
    text-align: center;
    font-size: 30rem/$base;
    color: #666;
    background-image: url('../common/images/img2.png');
    background-size: 100% 100%;
    background-position: center;
    position: relative;
    margin-right: 21rem/$base;
    margin-bottom: 20rem/$base;
    .sm1 {
      padding-top: 15rem/$base;
    }
    .xm1 {
      position: absolute;
      bottom: 12rem/$base;
      width: 218rem/$base;
      color: #ffae00;
      font-size: 24rem/$base;
    }
  }
  .listout {
    padding-top: 20rem/$base;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    .active{
        background-image: url('../common/images/img1.png');
    }
  }
</style>
