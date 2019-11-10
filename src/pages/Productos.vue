<template>
	<Layout>
		<Slideshow :data="data" />
		<Sign :id="1" :data="data" />
		<Products :data="data" />
	
	</Layout>
</template>

<script>
// data
import content from "~/data/content.json"

// components
import Slideshow from "~/components/Slideshow.vue";
import Sign from "~/components/Sign.vue";
import Products from "~/components/Products.vue";

export default {
	components: {
		Slideshow,
		Sign,
		Products
	},
	data: function() {
		return {
			// keep an eye on these pointers, if JSON structure changes, these must change accordingly
			data: content.es.productos, //productos data in the JSON file.
		}
	},
	metaInfo: {
		title: 'Nuestros Productos'
	}
}
</script>