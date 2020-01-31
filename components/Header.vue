<template>
  <header class="header">
    <!-- <div class="header-secundary"></div> -->

    <div class="header-content">
      <nuxt-link to="/">
        <img :src="require('~/assets/images/'+logo+'.webp')" />
      </nuxt-link>
      <nav class="nav">
        <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
        <nuxt-link class="nav-link" to="/nosotros">Sobre Nosotros</nuxt-link>
        <nuxt-link class="nav-link" to="/equipo">Nuestro Equipo</nuxt-link>
        <nuxt-link class="nav-link" to="/productos">Nuestros Productos</nuxt-link>
        <nuxt-link class="nav-link" to="/novedades">Novedades</nuxt-link>
        <nuxt-link class="nav-link" to="/contacto">Contactos</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    logo: String
  }
};
</script>

<style scoped>
.header {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header-content {
  width: 100%;
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header-content img {
  width: 200px;
  margin: 0 15px;
}
.nav-link {
  padding: 15px 15px;
  font-size: 1em;
  text-decoration: none;
  text-transform: capitalize;
  color: #666666;
  border-right: 1px solid #c00000;
}
.nav-link:last-child {
  border-right: none;
}
.nav-link.nuxt-link-exact-active {
  color: #c00000;
  font-weight: bold;
}
.nav-link:hover {
  color: #c00000;
}
.header-secundary {
  width: 100%;
  height: 35px;
  /* border-bottom: 2px solid #c00000; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
