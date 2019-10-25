<template>
  <header class="header">
    <div class="header-content">
      <!-- <img src="" alt=""> -->
      <g-image src="~/assets/images/logo.png" width="140px" alt="logo" background="#ffffff" quality="100" blur="50" />
      <nav class="nav">
        <g-link class="nav-link" to="/">Inicio</g-link>
        <g-link class="nav-link" to="/sobre-nosotros">Sobre Nosotros</g-link>
        <g-link class="nav-link" to="/nuestra-gente">Nuestra Gente</g-link>
        <g-link class="nav-link" to="/nuestros-productos">Nuestros Productos</g-link>
        <g-link class="nav-link" to="/contactos">Contactos</g-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .header {
    width: 1470px;
    height: 140px;
    display:flex;
    align-items: center;
  }
  .header-content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img{
    margin: 0 25px;
  }
  .nav-link{
    margin-left: 75px;
    font-size: 1.05em;
    text-decoration: none;
    text-transform: capitalize;
    color: #999999;
  }
  .nav-link.active{
    color: #c00000;
    font-weight: bold;
  }
</style>

<script>
export default {
  
  }
</script>