<template>
	<section class="main">
    <Slideshow :slides="slides" />
    <Sign :id="1" :data="data" />
    <Banner :id="1" :data="data" :background="banners" />
    <Sign :id="2" :data="data" />
    <Banner :id="2" :data="data" :background="banners" />
  </section>
</template>

<script>
// data
import indexData from '~/data/data-index.json'
import media from '~/data/media.json'

//components
import Slideshow from '~/components/Slideshow.vue'
import Sign from '~/components/Sign.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Slideshow,
    Sign,
    Banner
  },
  data() {
		return {
			slides: media.slideshow,
			data: indexData.es,
			banners: media.banners.index
		}
	}
}
</script>

<style>

</style>
