<template>
	<section>
		<Slideshow :slides="slides" />
		<!-- <h1>{{id}}</h1> -->
		<!-- <h2>{{dataIntro}}</h2> -->
		<Intro :data="dataIntro" :media="mediaIntro" :marca="marca" />
		<Marcas :data="dataMarcas" :media="mediaMarcas" :marca="marca" />
	</section>
</template>

<script>
// data
import data from '~/data/data-marcas.json'
import media from '~/data/media.json'

// components
import Slideshow from '~/components/Slideshow.vue'
import Intro from '~/components/Intro.vue'
import Marcas from '~/components/Marcas.vue'

export default {
	components: {
		Slideshow,
		Intro,
		Marcas
	},
	data() {
		const base = this.$route.params.marcas
		return {
			slides: media.slideshow,
			dataIntro: data.es[base].marcaIntro,
			dataMarcas: data.es[base].marcaDetalles,
			mediaIntro: media.marcasLogos,
			mediaMarcas: media,
			marca: this.$route.params.marcas
		}
	},
	mounted() {
		// this.id = String(this.$route.params.marcas)
		// this.dataIntro = data.es[this.$route.params.marcas].marcaIntro
	}
}
</script>
