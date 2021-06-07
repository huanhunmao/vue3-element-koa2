<template>
<div>
 <h1>欢迎 界面 -- {{msg}}</h1>
  <!-- <el-button>去登陆</el-button> -->
  <router-link to="/login">去登陆</router-link>
</div>
</template>

<script>
  export default {
    name : 'welcome',
    props:['msg']
  }
</script>

<style>

</style>
