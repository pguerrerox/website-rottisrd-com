<template>
	<layout>
		<Banner :id="1" :data="data" />
		<Sign :id="1" :data="data" />
		<Banner :id="2" :data="data" />
		<Sign :id="2" :data="data" />
	</layout>
</template>

<script>
// data
import content from "~/data/content.json"

// components
import Banner from "~/components/Banner.vue"
import Sign from "~/components/Sign.vue"


export default {
	components: {
		Banner,
		Sign
	},
	data: function() {
		return {
			data: content.es.index,	//index data in the JSON file.
		}
	},
	metaInfo: {
		title: 'Inicio!'
	}
}
</script>