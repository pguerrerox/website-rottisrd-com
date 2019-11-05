<template>
	<layout>
		<Banner :id="0" />
		<Sign :id="0" />
		<Banner :id="1" />
		<Sign :id="1" />
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

<style scoped>

</style>