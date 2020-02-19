<template>
  <section class="banner-products">
    <div v-for="img in backgrounds" :key="img.id" class="products-wraper">
      <img :src="require('~/assets/images/banners/productos/' +	img + '.webp')" />
      <div class="products-content">
        <img
          :src="require('~/assets/images/logos/' + logos[marcas[backgrounds.indexOf(img)]].file + '.webp')"
          class="content-logo"
        />
        <a
          :href="'/marcas/' + marcas[backgrounds.indexOf(img)]"
          class="button"
        >{{ data.products[backgrounds.indexOf(img)].button }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
    media: Object
  },
  data() {
    return {
      marcas: ["rottis", "baruk", "nauj", "costero"],
      backgrounds: this.media.banners.productos,
      logos: this.media.marcasLogos
    };
  }
};
</script>

<style scoped>
.banner-products {
  background-color: #fff;
  width: 100%;
}
.products-wraper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
.products-wraper > img {
  width: 100%;
}
section.banner-products > div:first-child {
  margin: 0 0 5px 0;
}
section.banner-products > div:last-child {
  margin: 5px 0 0 0;
}
.products-content {
  position: absolute;
  z-index: 1;
  width: 600px;
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
}
.content-logo {
  width: auto;
  height: 125px;
}
section.banner-products > div:nth-child(2) > div > img {
  height: 150px;
}
.products-content a {
  padding: 10px 50px;
}
/* media query tablet */
@media screen and (max-width: 768px) {
  .products-content {
    width: 75%;
    height: 85%;
    background-color: rgba(255, 255, 255, 0.85);
  }
}
/* media query mobile */
@media screen and (max-width: 425px) {
  .products-content {
    width: 75%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.65);
  }
  .content-logo {
    width: auto;
    height: 50%;
  }
  section.banner-products > div:nth-child(2) > div > img {
    height: 50%;
  }
  .products-content a {
    padding: 7px 35px;
    font-size: 0.9em;
  }
}
@media screen and (max-width: 320px) {
  .products-wraper {
    height: 175px;
  }
  .products-wraper > img {
    width: auto;
    height: 100%;
  }
}
</style>
