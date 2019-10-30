<template>
  <section class="banner">
    <div class="banner-wraper">
      <div class="banner-content">
        <h1> Condicion {{toview}}, {{id+1}} vs {{idx}} </h1>
        <h1 v-if="id+1 === idx">{{h1}} </h1>
        <!-- <h1>¿Quienes somos?</h1> -->
        <p>La <strong>fábrica de quesos Rottis</strong> nace en el pueblo pequeño de Luperón, Puerto Plata; con la visión de producir quesos dominicanos de la más alta calidad para su exportación hacia los estados unidos.</p>
        <a href="#" class="button">Descubre mas sobre nosotros</a>
      </div>
    </div> 
  </section>
</template>
      
<style scoped>
  section.banner{
    background-image: url("../assets/images/banner2.png") ;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-wraper{
    width: 1470px;
    height: fit-content;
  }
  .banner-content{
    background-color: rgba(255, 255, 255, 0.50);
    width: 630px;
    height: 400px;
    overflow: hidden;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .banner-content p{
    width: 75%;
    font-size: 1.2em;
    padding: 0 30px;
    text-align: justify;
  }
  .banner-content p strong{
    color:#c00000;
  }
  a.button{
    background-color: #c00000; 
    color: #ffffff;
    text-decoration: none;
    padding: 10px 15px;
    margin: 15px;
  }
  a.button:hover{
    background-color: #ffffff;
    border-right: 2px solid #c00000;
    border-left: 2px solid #c00000;
    color: #c00000;
  }
</style>

<script>
import content from "~/data/content.json"

export default {
  props: {
    id: Number
  },
  data: function(){
    return{
      idx: content.es.banners[this.id].id,
      h1: content.es.banners[this.id].h1,
      p: content.es.banners[this.id].p
    }
  },
  computed:{
    toview: function(){
      return this.id === this.idx
    }
  }
}
</script>
