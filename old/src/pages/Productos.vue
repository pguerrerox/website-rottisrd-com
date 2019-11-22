<template>
	<Layout>
		<Slideshow :slides="slides" />
		<Sign :id="1" :data="data" />
		<Products :data="data" :media="media" />
	</Layout>
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
			data: productosData.es,
			media
		}
	},
	metaInfo: {
		title: 'Nuestros Productos'
	}
}
</script>
