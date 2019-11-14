<template>
	<section class="marcas">
		<div class="marcas-wrapper" v-for="item in marcas" :key="item.id">
			<div class="marcas-top">
				<!-- <h1>{{item.index}}</h1> -->
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
		data: Object,
		media: Object,
		marca: String,
	},
	data: function() {
		return {
			marcas: this.data.es.marcaDetalles,
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
.marcas-wrapper:not(:last-child){
	margin-bottom: 10px;
} 
.marcas-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.marcas-top{
	width: 1440px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.marcas-top h2{
	width: 700px;
	text-align: justify;
}
.marcas-ilustracion{
	width: 100%;
	height: 450px;
	overflow: hidden;
	object-position: center;
	object-fit: cover;
}
.marcas-ilustracion img{
	width: 100%;
	object-position: center;
	object-fit: cover;
}
</style>