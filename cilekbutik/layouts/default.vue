<template>
  <div>

    <Header/>
    <NavigationBar/>
    <Nuxt />
  </div>
</template>

<script>

  import Header from '@/components/Header'
  import NavigationBar from '@/components/NavigationBar'
  
  export default {

    data(){
      return{
      }
    },
    components:{
      Header,
      NavigationBar
    },
  }
</script>
<style>

</style>
