<template>
	<layout>
		<Slideshow :slides="slides" />
		<Sign :id="1" :data="data" />
		<Banner :id="1" :data="data" :background="banners" />
		<Sign :id="2" :data="data" />
		<Banner :id="2" :data="data" :background="banners" />
	</layout>
</template>

<script>
// data
import indexData from "~/data/data-index.json";
import media from "~/data/media.json"

// components
import Banner from "~/components/Banner.vue";
import Sign from "~/components/Sign.vue";
import Slideshow from "~/components/Slideshow.vue";

export default {
	components: {
		Banner,
		Sign,
		Slideshow,
	},
	data: function() {
		return {
			data: indexData.es,
			banners: media.banners.index,
			slides: media.slideshow,
		}
	},
	metaInfo: {
		title: 'Inicio!'
	}
}
</script>