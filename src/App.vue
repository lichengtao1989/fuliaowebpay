<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="scss" >
// @import "@/common/style/mixin";
$base:75;

 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: $base;
  // transform: scale(.5);
  
  width:750rem/$base;
      background: #f3f3f3;  
      overflow-x: hidden;
      overflow-y: scroll;
}
</style>
