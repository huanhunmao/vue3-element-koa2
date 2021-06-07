<template>
<router-view>
</router-view>
</template>

<script>

  export default {
    name : 'app',
    mounted() {
      console.log(this.$storage)  // undefined 
      this.$storage.setItem('name','fhj')
    },
  }
</script>

<style>

</style>
