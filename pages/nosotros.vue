<template>
  <section class="main">
    <Slideshow :slides="slides" :slideshowPos="slideshowPos" />
    <Texto :state="historia"/>
    <hr/>
    <Texto :state="filosofia"/>
    <hr/>
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
      slideshowPos: 1,
      historia:{
        content: content.es.historia,
        imagenes: media.banners.nosotros,
        id: 0,
        texto: true,
        imagen: false,
        filosofia: false
      },
      filosofia:{
        content: content.es.filosofia,
        imagenes: media.banners.nosotros,
        id: 1,
        texto: false,
        imagen: false,
        filosofia: true
      },
      calidad:{
        content: content.es.calidad,
        imagenes: media.banners.nosotros,
        id: 2,
        texto: true,
        imagen: true,
        filosofia: false
      },
    }
  }
}
</script>

<style>

</style>