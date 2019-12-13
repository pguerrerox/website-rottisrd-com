<template>
	<section class="main">
		<Slideshow :slides="slides" />
		<Info />
		<hr />
		<Form />
		<hr />
		<Empleo />
	</section>
</template>

<script>
// data
import media from '~/data/media.json'

// components
import Slideshow from '~/components/Slideshow.vue';
import Info from '~/components/Info.vue';
import Form from '~/components/Form.vue';
import Empleo from '~/components/Empleo.vue';

export default {
	components: {
		Info,
		Form,
		Empleo,
		Slideshow
	},
	data(){
		return{
			slides: media.slideshow
		}
	},
	metaInfo: {
		title: 'Contacto'
	}
}
</script>

<style scoped>
hr {
    width: 100%;
    border: 1px solid #cc3333;
    margin: 20px auto 20px auto;
    
}
</style>
