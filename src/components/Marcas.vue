<template>
	<section class="marcas">
		<div class="marcas-wrapper" v-for="item in data" :key="item.id">
			<div class="marcas-top">
				<h2 v-html="item.info"></h2>
				<g-image :src="require('!!assets-loader!~/assets/images/productShots/'+productShot[marca][item.index]+'.png')" />
			</div>
			<div class="marcas-ilustracion">
				<g-image :src="require('!!assets-loader!~/assets/images/banners/marcas/'+banners[marca][item.index]+'.png')" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: Array,
		media: Object,
		marca: String,
	},
	data: function() {
		return {
			productShot: this.media.productShots,
			banners: this.media.banners.marcas,
		}
	}
}
</script>

<style scoped>
.marcas {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.marcas-wrapper:not(:last-child) {
	margin-bottom: 10px;
}
.marcas-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.marcas-top {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}

.marcas-top h2 {
	width: 700px;
	text-align: justify;
}
.marcas-ilustracion {
	width: 100%;
	height: 450px;
	overflow: hidden;
}
.marcas-ilustracion img {
	width: 100%;
	height: 100%;
	object-position: center;
	object-fit: cover;
}
</style>