<template>
  <Section class="texto">
    <div class="texto-texto short" :class="{noMargin: texto}" v-if="texto">
      <h1>{{titulo}}</h1>
      <p v-for="text in parrafo" :key="text.id" v-html="text.content"></p>
    </div>

    <div class="texto-filosofia short" :class="{noMargin: filosofia}" v-if="filosofia">
      <div v-for="text in parrafo" :key="text.id">
        <h1>{{text.titulo}}</h1>
        <p v-html="text.content"></p>
      </div>
    </div>

    <div class="texto-ilustracion" v-if="imagen">
      <img :src="require('~/assets/images/banners/productos/' + imagenes[id] +	'.png')"/>
    </div>
  </Section>
</template>

<script>
export default {
  props: {
    state: Object,
  },
  data(){
    return {
      titulo: this.state.content.titulo,
      parrafo: this.state.content.texto,
      imagenes: this.state.imagenes,
      id: this.state.id,
      texto: this.state.texto,
      imagen: this.state.imagen,
      filosofia: this.state.filosofia
    }
  }
}
</script>

<style scoped>
.texto{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.short{
  width: 100%;
}
/* conditional classes */
.noMargin {
	margin: 75px 0 !important;
}
.texto-texto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.texto-filosofia{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.texto-filosofia div{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 25%;
}
.texto-ilustracion{
  width: 100%;
  height: 450px;
  overflow: hidden;
}
.texto-ilustracion img{
  width: 100%;
	height: 100%;
	object-position: center;
	object-fit: cover;
}
</style>