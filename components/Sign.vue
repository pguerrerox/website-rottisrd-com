<template>
  <section class="sign">
    <div class="sign-wraper">
      <div class="sign-message">
        <h1>{{ h1 }}</h1>
        <h2>{{ h2 }}</h2>
      </div>
      <div :class="{ noMargin: imgs.length <= 0 }" class="sign-logos">
        <a v-for="(img, index) in imgs" :key="img.id" :href="'/marcas/'+marcas[index]">
          <img :src="require('~/assets/images/logos/' + img +'.webp')" alt="Rottis Logo" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: Number,
    data: Object
  },
  data() {
    const localData = this.data.signs[this.id - 1];
    return {
      idx: localData.id,
      h1: localData.h1,
      h2: localData.h2,
      imgs: localData.imgs,
      marcas: ["rottis", "baruk", "nauj", "costero"]
    };
  }
};
</script>

<style scoped>
.sign {
  background-color: #fff;
  width: 100%;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-wraper {
  width: 100%;
  margin: 75px auto;
}
.sign-message {
  text-align: center;
  /* margin-bottom: 50px */
}
.sign-message h1 {
  margin: 0;
}
.sign-message h2 {
  margin-top: 0;
}
.sign-logos {
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;
}
.sign-logos img {
  width: 200px;
  height: auto;
  align-self: baseline;
}

/* conditional styles */
.noMargin {
  margin: 0 !important;
}

/* media query mobile */
@media screen and (max-width: 425px) {
  .sign {
    max-height: 100%;
  }
  .sign-message h2 {
    font-size: 1.2em;
  }
  .sign-logos {
    flex-wrap: wrap;
  }
  .sign-logos img {
    width: 150px;
    height: auto;
    padding: 10px 5px;
  }
}
/* media query tablet */
@media screen and (max-width: 768px) {
  .sign {
    max-height: 100%;
  }
  .sign-logos {
    flex-wrap: wrap;
  }
  .sign-logos img {
    width: 175px;
    height: auto;
    padding: 10px 15px;
  }
}
</style>
