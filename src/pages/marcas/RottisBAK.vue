<template>
	<layout>
		<Slideshow :slides="slides"/>
		<Intro :data="dataIntro" :media="mediaIntro" :marca="marca" />
		<Marcas :data="dataMarcas" :media="mediaMarcas" :marca="marca" />
	</layout>
</template>

<script>
// data
import data from "~/data/marcas/rottis.json"
import media from "~/data/media.json"

// components
import Slideshow from "~/components/Slideshow.vue";
import Intro from "~/components/Intro.vue";
import Marcas from "~/components/Marcas.vue";

export default {
	components:{
		Slideshow,
		Intro,
		Marcas,
	},
	data: function(){
		return {
			slides: media.slideshow,
			marca: "rottis",
			dataIntro: data.es.marcaIntro,
			mediaIntro: media.marcasLogos,
			dataMarcas: data.es.marcaDetalles,
			mediaMarcas: media,
		}
	}
}
</script>