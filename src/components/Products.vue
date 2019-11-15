<template>
	<section class="banner-products">
		<div class="products-wraper" v-for="img in backgrounds" :key="img.id">
			<g-image :src="require('!!assets-loader!~/assets/images/banners/productos/'+img+'.png')" />
			<div class="products-content">
				<g-image class="content-logo" :src="require('!!assets-loader!~/assets/images/logos/'+logos[marcas[backgrounds.indexOf(img)]].file+'.png')" />
				<g-link :to="'/marcas/'+marcas[backgrounds.indexOf(img)]" class="button">{{data.products[backgrounds.indexOf(img)].button}}</g-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: Object,
		media: Object,
	},
	data: function() {
		return {
			marcas: ["rottis", "baruk", "nauj", "costero"],
			backgrounds: this.media.banners.productos,
			logos: this.media.marcasLogos,
		}
	},
}
</script>

<style scoped>
section.banner-products {
	width: 100%;
}
.products-wraper {
	position: relative;
	width: 100%;
	height: 500px;
	/* background-size: cover;
	background-position: center;
	background-repeat: no-repeat; */
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px 0;
}
.products-wraper>img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
section.banner-products > div:nth-child(2) > div > img{
	height: 150px;
}
/* .banner-products >div:nth-child(2) img{
} */
.products-content a{
	padding: 10px 50px;
}

</style>