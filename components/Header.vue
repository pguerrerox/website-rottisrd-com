<template>
  <header class="header">
    <div class="header-content">
      <div class="content-inner">
        <nuxt-link to="/"><img :src="require('~/assets/images/'+logo+'.webp')" /></nuxt-link>
        <a class="burgermenu" id="burgermenu" href="javascript:void(0);" @click="openNav()">&#9776;</a>
      </div>
      <nav class="nav" :class="{menuOn: menuOn}">
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
  },
  data(){
    return{
      menuOn: false,
      menuOff: true,
    }
  },
  methods: {
    openNav(){
      if (this.menuOn == false) this.menuOn = true
      else this.menuOn = false;
    }
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
.burgermenu {
  display: none;
}

/* media query */
@media screen and (max-width: 1024px) {
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0;
  }
  .content-inner{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-content img {
   width: 250px;
   margin: 20px auto;
  }
  .nav{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 0;
    transition: max-height 0.25s ease-in;
  }
  .nav-link {
    padding: 15px 15px;
    font-size: 1em;
    text-decoration: none;
    text-transform: capitalize;
    color: #666666;
    border-right: none;
    text-align: center
  }
  .nav-link.nuxt-link-exact-active {
    color: #c00000;
    font-weight: bold;
  }
  .burgermenu {
    position: absolute;
    display: inline;
    left: 90%;
    font-size: 1.75rem;
    text-decoration: none;
    color: #c00000;
  }
  .menuOn{
    max-height: 500px !important;
    transition: max-height 0.25s ease-in;
  }
}
</style>