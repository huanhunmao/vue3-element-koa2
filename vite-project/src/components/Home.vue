<template>
<div>
  <div class="basic_layout">
    <div class="nav_side"></div>
    <div class="content_right">
      <div class="nav_top">
        <div class="bread">面包屑</div>
        <div class="user_info">用户</div>
      </div>
      <div class="wrapper">
        <div class="main_page">
        <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import Welcome from './Welcome'

  export default {
    name : 'home',
  }
</script>

<style style="scss">
/* 整体最外层 */
.basic_layout{
  position: relative;
}
 .nav_side{
    position: fixed;
    width:200px;
    height:100vh;
    background-color:#001529;
    color:#fff;
    /* 自动出现y方向滚动条 */
    overflow-y:auto;
    transition: width .5s;
  }
  .content_right{
    /* 左边被nav_side占据了 200px */
    margin-left: 200px;
    
  }
  .nav_top{
    height: 50px;
    line-height: 50px;
    /* 文字 左右布局 */
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ;
    /* 文字给左右间距20px */
    padding:  0 20px; 
  }
  .wrapper{
    background: #eef0f3;
    padding: 20px;
    /* 计算属性 使得下面内容部分撑满 */
    height: calc(100vh - 50px);
  }
  .main_page{
    background: #fff;
    height: 100%;
  }
</style>
