<template>
	<header class="header">
		<div class="header-content">
			<g-link to="/">
				<g-image src="~/assets/images/logo.png" width="140px" alt="logo" background="#ffffff" quality="100" blur="50" />
			</g-link>
			<nav class="nav">
				<g-link class="nav-link" to="/">Inicio</g-link>
				<g-link class="nav-link" to="/nosotros">Sobre Nosotros</g-link>
				<g-link class="nav-link" to="/gente">Nuestra Gente</g-link>
				<g-link class="nav-link" to="/productos">Nuestros Productos</g-link>
				<g-link class="nav-link" to="/contacto/">Contactos</g-link>
			</nav>
		</div>
	</header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
	width: 1470px;
	height: 140px;
	display: flex;
	align-items: center;
}
.header-content {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
img {
	margin: 0 25px;
}
.nav-link {
	margin-left: 75px;
	font-size: 1.05em;
	text-decoration: none;
	text-transform: capitalize;
	color: #999999;
}
.nav-link.active--exact {
	color: #c00000;
	font-weight: bold;
}
.nav-link:hover {
	color: #c00000;
}
</style>