<template>
  <div class="layout">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<style>
  body {
    font-family: "gotham";
    margin:0;
    padding:0;
    /* line-height: 1.5; */
  }
  .layout {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
</style>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>