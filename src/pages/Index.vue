<template>
	<layout>
		<Slideshow :data="slides" />
		<Sign :id="1" :data="data" />
		<Banner :id="1" :data="data" />
		<Sign :id="2" :data="data" />
		<Banner :id="2" :data="data" />
	</layout>
</template>

<script>
// data
import content from "~/data/content.json"

// components
import Banner from "~/components/Banner.vue"
import Sign from "~/components/Sign.vue"
import Slideshow from "~/components/Slideshow.vue"


export default {
	components: {
		Banner,
		Sign,
		Slideshow,
	},
	props:{
		page: String
	},
	data: function() {
		return {
			// keep an eye on these pointers, if JSON structure changes, these must change accordingly
			data: content.es.index,
			slides: content.es.productos,
		}
	},
	metaInfo: {
		title: 'Inicio!'
	}
}
</script>