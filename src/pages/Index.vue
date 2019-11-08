<template>
	<layout>
		<Banner :id="1" />
		<Sign :id="1" />
		<Banner :id="2" />
		<Sign :id="2" />
	</layout>
</template>

<script>
import Banner from "~/components/Banner.vue"
import Sign from "~/components/Sign.vue"

export default {
	components: {
		Banner,
		Sign
	},
	metaInfo: {
		title: 'Inicio!'
	}
}
</script>