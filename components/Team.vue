<template>
  <section class="equipo">
    <h1>{{ departamento }}</h1>
    <div class="container">
      <div class="container-pic" v-for="pic in pics" :key="pic.id">
        <img :src="require('~/assets/images/team/' + departamento +'/'+ pic +'-0.webp')" class="fir-img" />
        <img :src="require('~/assets/images/team/' + departamento +'/'+ pic +'-1.webp')" class="sec-img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    departamento: String,
    pics: Array
  }
};
</script>

<style scoped>
.equipo {
  background: #ffffff;
}
h1 {
  font-size: 6em;
  text-transform: capitalize;
  margin: 0;
  padding: 25px 0 0 0;
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
  padding: 0 0 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
.container-pic {
  width: 300px;
  position: relative;
  /* padding: 15px; */
}
.fir-img {
  position: absolute;
  width: inherit;
  z-index: 1;
  transition: opacity 0.25s;
}
.sec-img {
  width: inherit;
  z-index: 2;
}
.container-pic:hover .fir-img {
  opacity: 0;
}
</style>