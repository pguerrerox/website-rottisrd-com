<template>
	<section class="slideshow">
		<div class="circles" v-if="!nonSlides">
			<div :class="{ active: slideshowPos === imgs.indexOf(img) }" v-for="img in imgs" :key="img.id" v-on:click="slideshowPos = imgs.indexOf(img)" class="dots"></div>
		</div>
		<div class="images" v-if="!nonSlides">
			<img v-for="img in imgs" :key="img.id" v-show="slideshowPos === imgs.indexOf(img)" :src="require('~/assets/images/slideshow/'+ img +'.png')" class="slides-imgs fade" />
		</div>
		<div class="images" v-if="nonSlides">
			<img :src="require('~/assets/images/fijas/'+ fijas[marca] +'.png')" class="slides-imgs fade" />
		</div>
	</section>
</template>

<script>
export default {
	props: {
		slides: Array,
		marca: String,
		fijas: Object,
		nonSlides: Boolean
	},
	data() {
		return {
			slideshowPos: Math.floor(Math.random() * Math.floor(4)),
			imgs: this.slides
		}
	},
	mounted() {
		setInterval(() => {
			this.counter()
		}, 3500)
	},
	methods: {
		counter() {
			if(this.imgs){
				if (this.slideshowPos >= this.imgs.length - 1) {
					this.slideshowPos = 0
				} else {
					this.slideshowPos++
				}
			}
		}
	}
}
</script>

<style scoped>
.slideshow {
	width: 100%;
	height: 50vh;
	max-height: 500px;
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
	width: 100%;
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
		opacity: 0.6;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade {
	from {
		opacity: 0.6;
	}
	to {
		opacity: 1;
	}
}
</style>
