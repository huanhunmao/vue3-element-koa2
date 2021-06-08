<template>
<router-view>
</router-view>
</template>

<script>

  export default {
    name : 'app',
//     mounted() {
//       // console.log(this.$storage)  // undefined 
//       if(this.$storage){
//  this.$storage.setItem('age','27');
//  this.$storage.setItem('name','test');
//  this.$storage.setItem('obj','{a:1}');

//  this.$storage.clearItem('age');
//  this.$storage.clearItem('name');
//  //这个有效
// //  this.$storage.clearAll('age');
//       }
     
//     },
  }
</script>

<style style="scss">
@import  './assets/style/reset.css';
@import  './assets/style/index.scss';

</style>
