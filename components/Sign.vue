<template>
  <section class="sign">
    <div class="sign-wraper">
      <div class="sign-message">
        <h1>{{ h1 }}</h1>
        <h2>{{ h2 }}</h2>
      </div>
      <div :class="{ noMargin: imgs.length <= 0 }" class="sign-logos">
        <img
          v-for="img in imgs"
          :key="img.id"
          :src="require('~/assets/images/logos/' + img +'.webp')"
          alt="Rottis Logo"
        />
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
      imgs: localData.imgs
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
</style>
