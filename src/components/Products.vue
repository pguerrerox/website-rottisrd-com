<template>
	<section class="banner-products">
		<!-- :style="{'background-image': 'url(' + require('../assets/images/banner'+id+'.png')+')'}" -->
		<div class="products-wraper" v-for="producto in productos" :key="producto.id" :style="{'background-image': 'url(' + require('../assets/images/productos/'+producto.bgimage+'bg.png')+')'}">
			<div class="products-content">
				<g-image class="content-logo" :src="require('!!assets-loader!~/assets/images/logos/'+producto.logo+'.png')" />
				<g-link :to="producto.path" class="button">{{producto.button}}</g-link>
			</div>
		</div>
	</section>
</template>

<script>
import content from "~/data/content.json";

export default {
	// idea: usar el link o titulo de la pagina para fetchear info desde el documento de contenido.... usarlo como prop...
	props: {
		data: Object,
	},
	data: function() {
		let localData = this.data
		return {
			productos: localData.products,
		}
	},
	computed: {}
}
</script>

<style scoped>
section.banner-products {
	width: 100%;
	/* background-color: bisque; */
}
.products-wraper {
	width: 100%;
	height: 500px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px 0;
}
section.banner-products>div:first-child {
	margin: 0 0 5px 0;
}
section.banner-products>div:last-child {
	margin: 5px 0 0 0;
}
.products-content {
	width: 670px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.50);
}
.content-logo{
	width: auto;
	height: 125px;
}
.banner-products>div:nth-child(2) img{
	height: 150px;
}
.products-content a{
	padding: 10px 50px;
}

</style>