<template>
	<div class="layout">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		Header,
		Footer
	}
}
</script>

<style>
body {
	font-family: 'gotham';
	margin: 0;
	padding: 0;
	/* line-height: 1.5; */
}

.layout {
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1 {
	font-family: markinson;
	font-size: 3.5em;
	font-weight: normal;
	margin: 0.25em 0;
	color: #c00000;
}

h3 {
	font-size: 1.5em;
	color: #999999;
	font-weight: normal;
	margin: 5px 0;
}

h2 {
	font-size: 1.17em;
	color: #999999;
	font-weight: normal;
}

/* buttons */

a.button,
.button {
	background-color: #c00000;
	color: #ffffff;
	text-decoration: none;
	padding: 10px 15px;
	margin: 15px;
}

a.button:hover,
.button:hover {
	background-color: #ffffff;
	border-right: 2px solid #c00000;
	border-left: 2px solid #c00000;
	color: #c00000;
}
</style>
