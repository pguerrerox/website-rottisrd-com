<template>
	<section class="marcas">
		<div v-for="item in data" :key="item.id" class="marcas-wrapper">
			<div class="marcas-top" :class="{ reverse: item.index % 2 != 0}">
				<p v-html="item.info"></p>
				<img :src="require('~/assets/images/productShots/' + productShot[marca][item.index] +	'.png')"/>
			</div>
			<div class="marcas-ilustracion">
				<img :src="require('~/assets/images/banners/marcas/' + banners[marca][item.index] +	'.png')"/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: Array,
		media: Object,
		marca: String
	},
	data() {
		return {
			productShot: this.media.productShots,
			banners: this.media.banners.marcas
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
	margin: 15px 0 0 0;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
.reverse{
	flex-direction: row-reverse;
}
.marcas-top p {
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
