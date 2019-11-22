<template>
	<section class="intro">
		<div class="intro-wrapper">
			<div class="intro-logo">
				<g-image
					:src="
						require('!!assets-loader!~/assets/images/logos/' + logo + '.png')
					"
				/>
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
	width: 100%;
	min-height: 300px;
	display: flex;
	justify-content: center;
	box-shadow: 0px 2px 5px 0px black;
	z-index: 2;
}
.intro-wrapper {
	max-width: 1440px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
.intro-logo,
intro-text {
	margin: 10px 100px;
}
.intro-logo img {
	width: 275px;
}
.intro-text {
	max-width: 700px;
	text-align: justify;
}
</style>
