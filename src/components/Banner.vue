<template>
	<section class="banner">
		<!-- :style="{'background-image': 'url(' + require('../assets/images/banners/banner'+id+'.png')+')'}" -->
		<g-image :src="require('!!assets-loader!~/assets/images/banners/index/'+background[id-1]+'.png')" />
		<div class="banner-wraper">
			<div class="banner-content">
				<h1>{{h1}}</h1>
				<p v-html="p"></p>
				<g-link to="" class="button">{{button}}</g-link>
	
				<!--
					Example of the hardcoded structure.
					<h1>¿Quienes somos?</h1>
					<p>La <strong>fábrica de quesos Rottis</strong> nace en el pueblo pequeño de Luperón, Puerto Plata; con la visión de producir quesos dominicanos de la más alta calidad para su exportación hacia los estados unidos.</p>
					<a href="#" class="button">Descubre mas sobre nosotros</a>
				-->
	
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		id: Number,
		data: Object,
		background: Array,
	},
	data: function() {
		const localData = this.data.banners[this.id - 1];
		return {
			idx: localData.id,
			h1: localData.h1,
			p: localData.p,
			button: localData.button
		}
	}
}
</script>

<style scoped>
.banner {
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 700px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
}
.banner img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: -1;
	object-position: center;
	object-fit: cover;
}
.banner-wraper {
	width: 100%;
	max-width: 1440px;
	height: fit-content;
}
.banner-content {
	background-color: rgba(255, 255, 255, 0.85);
	width: 630px;
	height: 400px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.banner-content p {
	width: 75%;
	font-size: 1.2em;
	padding: 0 30px;
	text-align: justify;
}
.banner-content p>>>strong {
	color: #c00000;
}
</style>