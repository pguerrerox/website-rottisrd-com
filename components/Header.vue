<template>
	<header class="header">
		<div class="header-content">
			<!-- <a href="/">
						</a> -->
			<img src="~assets/images/logo.png" />
	
			<nav class="nav">
							<a class="nav-link" to="/">Inicio</a>
							<a class="nav-link" to="/nosotros">Sobre Nosotros</a>
							<a class="nav-link" to="/gente">Nuestra Gente</a>
							<a class="nav-link" to="/productos">Nuestros Productos</a>
							<a class="nav-link" to="/contacto">Contactos</a>
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
