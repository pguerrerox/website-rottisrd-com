<template>
	<section class="slideshow">
		<div class="circles">
			<div class="dots"></div>
			<div class="dots"></div>
			<div class="dots"></div>
			<div class="dots"></div>
		</div>
		<div class="images">
			<g-image class="dot-circles" src="~/assets/images/banner0.png" />
			<g-image class="dot-circles" src="~/assets/images/banner1.png" />
			<!-- <g-image class="dot-circles" src="~/assets/images/banner3.png" /> -->
		</div>
	</section>
</template>

<script>
export default {


}
</script>

<style>
section {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 400px;
	overflow: hidden;
	position: relative;
}
.circles {
	display: flex;
	width: 100%;
	justify-content: center;
	position: absolute;
	bottom: 5%;
}
.dots {
	background-color: rgb(255, 255, 255);
	width: 15px;
	height: 15px;
	margin: 5px;
	border-radius: 50%;
	border: solid 1px #ccc;
}
</style>