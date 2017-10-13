<template>
  <div class="payway">
    <div class="text01">请选择支付方式:</div>
    <div class="nextpart1">
      <div v-for="(item, index) in payList" class="compay" ref="zhifubao" :class="{active:index===selectedNum}" @click.prevent.stop='_addFlag(index,$event)' :data-type="item.type">
        <div class="rightimg" ></div>
        <span class="imgicon" :class="item.spanstr"></span>
        <span class="spwz" ref="wxtitle">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as dom from '@/common/js/dom';
  export default {
    props: {},
    data() {
      return {
        selectedNum: 0,
        payList: []
      }
    },
    computed: {},
    created() {
      this.payList = [{
        text: "支付宝",
        spanstr: "iconzfb",
        type: 1
      }, {
        text: "微信",
        spanstr: "iconwx",
        type: 2
      }];
    },
    mounted() {},
    methods: {
      _addFlag(index, event) {
        //active的样式值根据初始selectedNum 点击的时候改变selectedNum的值让其和点击索引值比较，其他同类的比较直是false 当前的比较值是true
        this.selectedNum = index;
        this.payType = parseInt(event.target.getAttribute('data-type'));
        // console.log(this.payType);
        this.$emit('payTypePass', this.payType)
      }
    },
    watch: {},
    components: {}
  }
</script>

<style scoped lang="scss">
  $base:75; //设计稿的尺寸除以10
  .payway {
    padding-left: 28rem/$base;
    .text01 {
      font-size: 20;
    }
    background-color: #fff;
  }
  .text01 {
    font-size: 20rem/$base;
    color: #999;
    height: 59rem/$base;
    line-height: 59rem/$base;
    border-bottom: 1px solid #eaeaea;
  }
  .imgicon {
    width: 56rem/$base;
    height: 56rem/$base;
    display: inline-block;
    vertical-align: middle;
    background-size: 100% 100%;
  }
  .compay {
    height: 95rem/$base;
    border-bottom: 1px solid #eaeaea;
    line-height: 95rem/$base;
    position: relative;
  } // .compay:first-child{
  //   .rightimg {
  //     background-image: url('../common/images/img4.png');
  //   }
  // }
  .compay:last-child {
    border: none;
  }
  .spwz {
    display: inline-block;
    color: #333;
    font-size: 24rem/$base;
    margin-left: 16rem/$base;
    vertical-align: middle;
  }
  .rightimg {
    position: absolute;
    width: 48rem/$base;
    height: 48rem/$base;
    background-image: url('../common/images/img3.png');
    background-size: 100% 100%;
    right: 25rem/$base;
    top: 25rem/$base;
  }
  .active {
     .rightimg{
       background-image: url('../common/images/img4.png');
     }

  }
  .iconzfb {
    background-image: url('../common/images/img6.png');
  }
  .iconwx {
    background-image: url('../common/images/img5.png');
  }
</style>
