<template>
  <layout>
    <Banner :id="0"/>
    <Sign />
    <Banner2 />
    <Sign2 />

  </layout>
</template>

<style scoped>
  
</style>

<script>
import Banner from "~/components/Banner.vue"
import Sign from "~/components/Sign.vue"
import Banner2 from "~/components/Banner2.vue"
import Sign2 from "~/components/Sign2.vue"

export default {
  components:{
    Banner,
    Sign,
    Banner2,
    Sign2
  },
  data: function(){
    return{
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>