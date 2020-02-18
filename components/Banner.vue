<template>
  <section class="banner">
    <img :src="require('~/assets/images/banners/index/' +	background[id - 1] + '.webp')" />
    <div class="banner-wraper">
      <div class="banner-content">
        <h1>{{ h1 }}</h1>
        <p v-html="p"></p>
        <a :href="aLink" class="button">{{ button }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: Number,
    data: Object,
    background: Array
  },
  data() {
    const localData = this.data.banners[this.id - 1];
    return {
      idx: localData.id,
      h1: localData.h1,
      p: localData.p,
      button: localData.button,
      aLink: localData.a
    };
  }
};
</script>

<style scoped>
.banner {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  /* height: 700px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.banner img {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
  object-position: center;
  object-fit: cover;
}
.banner-wraper {
  position: absolute;
  left: 7.5%;
  /* width: 85%; */
  /* height: fit-content; */
}
.banner-content {
  background-color: rgba(255, 255, 255, 0.85);
  width: 600px;
  height: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-content p {
  width: 75%;
  padding: 0 30px;
  text-align: justify;
}
.banner-content p >>> strong {
  color: #c00000;
}

/* media query tablet */
@media screen and (max-width: 768px) {
  .banner {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
  }
  .banner-wraper {
    left: 50%;
    margin-left: -300px;
  }
  .banner-content p {
    width: 75%;
    padding: 0 30px;
    text-align: justify;
    font-size: 0.9em;
  }
  .banner-content p >>> strong {
    color: #c00000;
  }
}
/* media query mobile */
@media screen and (max-width: 425px) {
  .banner {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
  }
  .banner-wraper {
    position: absolute;
    left: 0;
    width: 100%;
    margin-left: 0;
  }
  .banner-content {
    background-color: rgba(255, 255, 255, 0.85);
    width: 100%;
  }
  .banner-content p {
    width: 75%;
    padding: 0 30px;
    text-align: justify;
    font-size: 0.9em;
  }
  .banner-content p >>> strong {
    color: #c00000;
  }
}
@media screen and (max-width: 320px) {
  .banner-wraper {
    position: absolute;
    left: 0;
    width: 100%;
    margin-left: 0;
  }
  .banner-content {
    background-color: rgba(255, 255, 255, 0.85);
    width: 100%;
    height: 80%;
  }
  .banner-content h1 {
    font-size: 3em;
  }
  .banner-content p {
    width: 75%;
    padding: 0 30px;
    text-align: justify;
    font-size: 0.9em;
  }
  .banner-content p >>> strong {
    color: #c00000;
  }
}
</style>