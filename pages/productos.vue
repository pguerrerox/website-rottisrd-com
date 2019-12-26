<template>
	<section class="main">
		<!-- <Slideshow :slides="slides" :slideshowPos="slideshowPos"/> -->
		<Sign :id="1" :data="data" />
		<Products :data="data" :media="media" />
	</section>
</template>

<script>
// data
import productosData from '~/data/data-productos.json'
import media from '~/data/media.json'

// components
import Slideshow from '~/components/Slideshow.vue'
import Sign from '~/components/Sign.vue'
import Products from '~/components/Products.vue'

export default {
	components: {
		Slideshow,
		Sign,
		Products
	},
	data() {
		return {
			slides: media.slideshow,
			slideshowPos: 2,
			data: productosData.es,
			media
		}
	},
	metaInfo: {
		title: 'Nuestros Productos'
	}
}
</script>
