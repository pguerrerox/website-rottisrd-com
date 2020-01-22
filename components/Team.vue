<template>
  <section class="equipo">
    <h1>{{ departamento }}</h1>
    <div class="container">
      <div class="container-pic" v-for="pic in pics" :key="pic.id">
        <img :src="require('~/assets/images/team/directores/'+ pic +'-0.png')" class="fir-img" />
        <img :src="require('~/assets/images/team/directores/'+ pic +'-1.png')" class="sec-img" />
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
  text-transform: capitalize;
  margin: 0;
  padding: 25px 0 0 0;
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center
}
.container-pic {
  position: relative;
  padding: 15px;
}
.fir-img {
  position: absolute;
  width: 350px;
  z-index: 1;
  transition: opacity 0.25s;
}
.sec-img {
  width: 350px;
  z-index: 2;
}
.container-pic:hover .fir-img {
  opacity: 0;
}
</style>