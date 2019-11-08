<template>
	<section class="slideshow">
		<div class="circles">
			<div class="dots" :class="{active: slideshowPos === imgs.indexOf(img)}" v-for="img in imgs" :key="img.id" v-on:click="slideshowPos = imgs.indexOf(img)"></div>
		</div>
		<div class="images">
			<g-image class="slides-imgs fade" v-for="img in imgs" :key="img.id" v-show="slideshowPos === imgs.indexOf(img)" :src="require('!!assets-loader!~/assets/images/'+img)" />
		</div>
	</section>
</template>

<script>
export default {
	props: {
		imgs: Array,
	},
	data: function() {
		return {
			slideshowPos: 0,
			// timer: null,
		}
	},
	mounted: function() {
		setInterval(() => {
			this.counter()
		}, 5000);
	},
	methods: {
		counter: function() {
			if (this.slideshowPos >= this.imgs.length - 1) {
				this.slideshowPos = 0;
			} else {
				this.slideshowPos++
			}
		},
	},
}
</script>

<style scoped>
.slideshow {
	width: 100vw;
	height: 50vh;
	max-height: 400px;
	overflow: hidden;
	position: relative;
}
.circles {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	position: absolute;
	left: 95%;
	z-index: 5;
}
.dots {
	background-color: rgb(255, 255, 255);
	width: 15px;
	height: 15px;
	margin: 10px 0;
	box-sizing: border-box;
	border-radius: 50%;
	/* border: solid 1px #ccc; */
}
.active {
	background-color: rgba(255, 255, 255, 0);
	border: solid 1px #fff;
}
.images {
	width: inherit;
	height: 100%;
}
.slides-imgs {
	width: fit-content;
	height: inherit;
	position: absolute;
	object-fit: cover;
	object-position: center;
}

/* Fading animation */
.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: s;
	animation-name: fade;
	animation-duration: 0.5s;
}
@-webkit-keyframes fade {
	from {
		opacity: .6
	}
	to {
		opacity: 1
	}
}
@keyframes fade {
	from {
		opacity: .6
	}
	to {
		opacity: 1
	}
}
</style>