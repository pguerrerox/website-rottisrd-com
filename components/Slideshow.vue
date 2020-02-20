<template>
  <section class="slideshow">
    <!-- <div class="circles" v-if="!nonSlides">
      <div
        :class="{ active: slideshowPos === imgs.indexOf(img) }"
        v-for="img in imgs"
        :key="img.id"
        v-on:click="slideshowPos = imgs.indexOf(img)"
        class="dots"
      ></div>
    </div>-->
    <div class="images" v-if="!nonSlides">
      <img
        :src="require('~/assets/images/slideshow/'+ imgs[page] +'.png')"
        class="slides-imgs fade"
      />
      <!-- v-for="img in imgs" :key="img.id" v-show="slideshowPos === imgs.indexOf(img)"  -->
    </div>
    <div class="images" v-if="nonSlides">
      <img :src="require('~/assets/images/fijas/'+ fijas[marca] +'.png')" class="slides-imgs fade" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slides: Object,
    page: String,
    marca: String,
    fijas: Object,
    nonSlides: Boolean
    // slideshowPos: Number
  },
  data() {
    return {
      // slideshowPos: Math.floor(Math.random() * Math.floor(4)),
      // slideshowPos: 0,
      imgs: this.slides
    };
  },
  mounted() {
    // setInterval(() => {
    // this.counter()
    // }, 3500)
  },
  methods: {
    // counter() {
    // 	if(this.imgs){
    // 		if (this.slideshowPos >= this.imgs.length - 1) {
    // 			this.slideshowPos = 0
    // 		} else {
    // 			this.slideshowPos++
    // 		}
    // 	}
    // }
  }
};
</script>

<style scoped>
.slideshow {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
}
.images {
  width: 100%;
  /* height: 500px; */
}
.slides-imgs {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.circles {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 95%;
  z-index: 5;
}
.dots {
  background-color: rgb(255, 255, 255);
  width: 15px;
  height: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 50%;
  /* border: solid 1px #ccc; */
}
.active {
  background-color: rgba(255, 255, 255, 0);
  border: solid 1px #fff;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: s;
  animation-name: fade;
  animation-duration: 0.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}

/* media query mobile */
@media screen and (max-width: 425px) {
  .images {
    width: 100%;
    height: 250px;
  }
}
</style>