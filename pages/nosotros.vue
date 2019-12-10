<template>
  <section class="main">
    <Slideshow :slides="slides" />
    <Texto :state="historia"/>
    <Texto :state="filosofia"/>
    <Texto :state="calidad"/>
  </section>
</template>

<script>
// data
import media from "~/data/media.json"
import content from "~/data/data-nosotros.json"

// components
import Slideshow from "~/components/Slideshow.vue";
import Texto from "~/components/Texto.vue";

export default {
  components: {
    Slideshow,
    Texto
  },
  data(){
    return{
      slides: media.slideshow,
      historia:{
        content: content.es.historia,
        imagenes: media.banners.productos,
        id: 2,
        texto: true,
        imagen: true,
        filosofia: false
      },
      filosofia:{
        content: content.es.filosofia,
        imagenes: media.banners.productos,
        id: 1,
        texto: false,
        imagen: true,
        filosofia: true
      },
      calidad:{
        content: content.es.calidad,
        imagenes: media.banners.productos,
        id: 1,
        texto: true,
        imagen: false,
        filosofia: false
      },
    }
  }
}
</script>

<style>

</style>