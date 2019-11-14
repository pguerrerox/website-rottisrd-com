<template>
	<layout>
		<Slideshow :data="slides"/>
		<Intro :data="myData" :media="myMedia" :marca="marca" />
		<Marcas :data="myData" :media="myMedia" :marca="marca" />
	</layout>
</template>

<script>
// data
import myData from "~/data/marcas/rottis.json"
import myMedia from "~/data/media.json"

// components
import Slideshow from "~/components/Slideshow.vue";
import Intro from "~/components/productos/Intro.vue";
import Marcas from "~/components/productos/Marcas.vue";

export default {
	components:{
		Slideshow,
		Intro,
		Marcas,
	},
	data: function(){
		return {
			marca: "rottis",
			myData,
			myMedia,
			slides: myMedia.slideshow,
		}
	}
}
</script>

<style scoped>

</style>