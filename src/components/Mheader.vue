<template>
  <div class="topone">
    <div class="left">我的能量:</div>
    <div class="right"><span class="nlstr">53,000</span><span class="songval">53,000</span></div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    props: {
      // bgImage: {
      //   type: String,
      //   default: ''
      // }
    },
    data() {
      return {
          msg:'haha'
      }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    watch: {},
    components: {


    }
  }
</script>

<style scoped lang="scss">
  $base:75; //设计稿的尺寸除以10
  .topone {
    height: 76rem/$base;
    line-height: 76rem/$base;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding-left: 29rem/$base;
    overflow: hidden;
    background-color: #fff;
    margin-bottom:20rem/$base;
    .left,
    .right {
      float: left;
    }
    .left {
      font-size: 26rem/$base;
      color: #999999;
    }
    .right {
      font-size: 30rem/$base;
      color: #ffae00;
    }
    .songval {
      display: inline-block;
      padding-left: 40rem/$base;
      padding-right: 12rem/$base;
      height: 29rem/$base;
      line-height: 29rem/$base;
      background-image: url('../common/images/img7.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left:12rem/$base;
        font-size: 30rem/$base;
    }
  }
</style>
