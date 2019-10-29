<template>
  <section class="banner">
    <div class="banner-wraper">
      <div class="banner-content">
        <h1>Conoce nuestros productos</h1>
        <p>Nuestros productos son elaborados con los mejores estándares de calidad del mercado, producidos de <strong>leche 100% dominicana.</strong></p>
        <a href="#" class="button">Descubre mas de nuestros productos</a>
      </div>
    </div> 
  </section>
</template>
      
<style scoped>
  section.banner{
    background-image: url("../assets/images/banner3.png") ;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-wraper{
    width: 1470px;
    height: fit-content;
  }
  .banner-content{
    background-color: rgba(255, 255, 255, 0.50);
    width: 630px;
    height: 400px;
    overflow: hidden;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .banner-content p{
    width: 75%;
    font-size: 1.2em;
    padding: 0 30px;
    text-align: justify;
  }
  .banner-content p strong{
    color:#c00000;
  }
  a.button{
    background-color: #c00000; 
    color: #ffffff;
    text-decoration: none;
    padding: 10px 15px;
    margin: 15px;
  }
  a.button:hover{
    background-color: #ffffff;
    border-right: 2px solid #c00000;
    border-left: 2px solid #c00000;
    color: #c00000;
  }
</style>

<script>
export default {
  
}
</script>
