<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="quater">
        <h3>Dirección</h3>
        <div class="info">
          <a href="https://goo.gl/maps/CuuVm1yrwCBo5XHA6" target="_blank" title="Click para abrir en Google Maps">
            La Sabana, Luperón Puerto Plata, República Dominicana
          </a>
        </div>
      </div>
      <div class="quater">
        <h3>Numero de Contacto</h3>
        <div class="info">
          <a href="tel:809-571-9821" target="_blank" title="Click para llamar">
            Tel: 809-571-9821
          </a> 
        </div>
      </div>
      <div class="quater">
        <h3>Correo electrónico</h3>
        <div class="info">
          <a href="mailto:info@rottisrd.com.do" target="_blank" title="Click para enviar email">
            info@rottisrd.com.do
          </a>
        </div>
      </div>
      <div class="quater">
        <h3>Redes Sociales</h3>
        <div class="info">
          <a href="#">
            <g-image class="social-logo" src="~/assets/images/facebook.png" width="30" quality="100" alt="facebook logo"/>
          </a>
          <a href="#">
            <g-image class="social-logo" src="~/assets/images/instagram.png" width="30" quality="100" alt="instagram logo"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer{
    width: 100%;
    min-height: 250px;
    background-color: #333333;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-content{
    width: 1470px;
    min-height: fit-content;
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }
  .quater{
    width: 260px;
  }
  .quater h3, .info{
    text-align: center;
  }
  .quater .info a{
    text-decoration: none;
    color: #ffffff;
    font-size: 1.05em;
  }
  .quater .info a:hover{
    color: #c00000;
  }
  .social-logo{
    padding: 0 5px;
  }
</style>

<script>
export default {
  
}
</script>