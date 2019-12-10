<template>
	<header class="header">
		<div class="header-content">
			<nuxt-link to="/">
				<img src="~assets/images/logo.png" />
			</nuxt-link>
			<nav class="nav">
				<nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
				<nuxt-link class="nav-link" to="/nosotros">Sobre Nosotros</nuxt-link>
				<nuxt-link class="nav-link" to="/gente">Nuestra Gente</nuxt-link>
				<nuxt-link class="nav-link" to="/productos">Nuestros Productos</nuxt-link>
				<nuxt-link class="nav-link" to="/contacto">Contactos</nuxt-link>
			</nav>
		</div>
	</header>
</template>

<style scoped>
.header {
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.header-content {
	width: 1440px;
	/* height: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
}
.header-content img {
	width: 200px;
	margin: 0 25px;
}
.nav-link {
	margin-left: 75px;
	font-size: 1.05em;
	text-decoration: none;
	text-transform: capitalize;
	color: #666666;
}
.nav-link.active--exact {
	color: #c00000;
	font-weight: bold;
}
.nav-link:hover {
	color: #c00000;
}
</style>
