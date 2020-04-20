<template>
  <section class="main">
    <slideshow :slides="slides" :page="page" />
    <Info />
    <Empleo />
  </section>
</template>

<script>
// data
import media from "~/data/media.json";

// components
import Slideshow from "~/components/Slideshow.vue";
import Info from "~/components/Info.vue";
import Form from "~/components/Form.vue";
import Empleo from "~/components/Empleo.vue";

export default {
  transition: 'fade',
  head() {
    return {
      script: [{ src: "https://www.google.com/recaptcha/api.js" }]
    };
  },
  components: {
    Info,
    Form,
    Empleo,
    Slideshow
  },
  data() {
    return {
      slides: media.slideshow,
      page: "contacto"
    };
  },
  metaInfo: {
    title: "Contacto"
  }
};
</script>