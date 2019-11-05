<template>
	<section class="sign">
		<div class="sign-wraper">
			<div class="sign-message">
				<h1>{{h1}}</h1>
				<h3>{{h3}}</h3>
	
				<!-- Hardcoded example
						<h1>La calidad es tradicion</h1>
						<h3>Conoce toda la calidad de nuestros productos</h3> -->
	
			</div>
			<div class="sign-logos">
				<!-- g-image is not generated, bug on gridsome... https://github.com/gridsome/gridsome/issues/292  -->
				<!-- <g-image v-for="img in imgs" :key="img.id" :src= "require('../assets/images/logos/'+img)" :style="{'width': '150px', 'height':'auto'}" alt="Rottis Logo" background="#ffffff" blur="50" quality="100" /> -->
	
				<!-- workaround for the g-images using !!assets-loader!, no idea how the F this work -->
				<g-image v-for="img in imgs" :key="img.id" :src="require('!!assets-loader?width=150!~/assets/images/logos/'+img)" width="150px" alt="Rottis Logo" background="#ffffff" blur="50" quality="100" />
			</div>
		</div>
	</section>
</template>

<script>
import content from "~/data/content.json"

export default {
	props: {
		id: Number,
	},
	data: function() {
		let localData = content.es.signs[this.id];
		return {
			idx: localData.id,
			h1: localData.h1,
			h3: localData.h3,
			imgs: localData.imgs
		}
	},
	computed: {}
}
</script>

<style scoped>
.sign {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px 0;
}
.sign-wraper {
	width: 1470px;
}
.sign-message {
	text-align: center;
	margin-bottom: 30px
}
.sign-message h1 {
	margin: 0;
}
.sign-message h3 {
	color: #999999;
	margin-top: 0;
}
.sign-logos {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center
}
.sign-logos img {
	height: fit-content;
}
</style>