<template>
	<section class="banner-products">
		<div v-for="img in backgrounds" :key="img.id" class="products-wraper">
			<img :src="require('~/assets/images/banners/productos/' +	img + '.png')" />
			<div class="products-content">
				<img :src="require('~/assets/images/logos/' + logos[marcas[backgrounds.indexOf(img)]].file + '.png')"	class="content-logo" />
				<a :href="'/marcas/' + marcas[backgrounds.indexOf(img)]" class="button">{{ data.products[backgrounds.indexOf(img)].button }}</a>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: Object,
		media: Object
	},
	data() {
		return {
			marcas: ['rottis', 'baruk', 'nauj', 'costero'],
			backgrounds: this.media.banners.productos,
			logos: this.media.marcasLogos
		}
	}
}
</script>

<style scoped>
.banner-products {
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
.products-wraper > img {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}
section.banner-products > div:first-child {
	margin: 0 0 5px 0;
}
section.banner-products > div:last-child {
	margin: 5px 0 0 0;
}
.products-content {
	width: 670px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.5);
}
.content-logo {
	width: auto;
	height: 125px;
}
section.banner-products > div:nth-child(2) > div > img {
	height: 150px;
}
/* .banner-products >div:nth-child(2) img{
} */
.products-content a {
	padding: 10px 50px;
}
</style>
