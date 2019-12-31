<template>
	<section class="intro">
		<div class="intro-wrapper">
			<div class="intro-logo">
				<img :src="require('~/assets/images/logos/' + logo + '.webp')"	/>
			</div>
			<div class="intro-text">
				<h3 v-html="data"></h3>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: String,
		media: Object,
		marca: String
	},
	data() {
		return {
			logo: this.media[this.marca].file
		}
	}
}
</script>

<style scoped>
.intro {
	background: #fff;
	width: 100%;
	min-height: 300px;
	display: flex;
	justify-content: center;
	/* box-shadow: 0px 0px 5px 0px rgb(156, 156, 156); */
	border-bottom: 2px solid #c00;
	z-index: 2;
}
.intro-wrapper {
	width: 100%;
	margin: 50px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
.intro-logo, .intro-text {
	margin: 10px 50px;
}
.intro-logo img {
	width: 250px;
}
.intro-text {
	max-width: 700px;
	text-align: justify;
}
</style>
