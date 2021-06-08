<template>
<div>
  <h1>login 启程</h1>
  <el-button @click="goHome">回首页</el-button>
<!-- <welcome msg='fhj'/> -->
</div>
</template>

<script >

import { useRouter } from 'vue-router'
// import Welcome from './Welcome.vue'
  export default {
    name : 'login',
    components : {
      // Welcome
    },
        methods: {
        goHome(){
            this.$router.push('/welcome')
        }
    },
    mounted() {
      // 方法一 更好
      // this.$request({
      //   methods:'get',
      //   url:'/login',
      //   data:{
      //     name : 'fhj'
      //   }
      // }).then((res) => {
      //   console.log(res)
      // })

      // 方法二 常规
        this.$request.get('/login',{name : 'fhj'},{loading : true, mock : true}).then((res) => {
          console.log(res)
        })
    },

  
  }
//   export default {
//     name : 'login',
//     methods: {
//         goHome(){
//             this.$router.push('/welcome')
//         }
//     },
//   }


  const router = useRouter()
  const goHome = () => {
      router.push('/welcome')
  }


</script>

<style>

</style>
