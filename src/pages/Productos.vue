<template>
	<Layout>
		<h1>Productos</h1>
		<Slideshow />
	
	</Layout>
</template>

<script>
import Slideshow from "~/components/Slideshow.vue";

export default {
	components: {
		Slideshow
	},
	metaInfo: {
		title: 'Nuestros Productos'
	}
}
</script>
 
<style scoped>

</style>