// NOTE to self
// check the slider DATA, is hard coded on this file.... check how to bring it from the data.json

<template>
	<Layout>
		<h1>Productos</h1>
		<Slideshow :imgs="slideImages"  />
		<Sign :id="2" />
	
	</Layout>
</template>

<script>
import Slideshow from "~/components/Slideshow.vue";
import Sign from "~/components/Sign.vue"

export default {
	components: {
		Slideshow,
		Sign
	},
	data: function(){
		return{
			slideImages:[
				"banner0.png",
				"banner1.png",
				"banner2.png"
			],
		}
	},
	metaInfo: {
		title: 'Nuestros Productos'
	}
}
</script>