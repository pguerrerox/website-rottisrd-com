<template>
  <layout>
    <h1>Hello World!</h1>
    <Banner />
  </layout>
</template>

<style scoped>
  
</style>

<script>
import Banner from "~/components/Banner.vue"

export default {
  components:{
    Banner
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>