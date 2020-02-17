<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="quater">
        <h3>Dirección</h3>
        <div class="info">
          <a
            href="https://goo.gl/maps/CuuVm1yrwCBo5XHA6"
            target="_blank"
            title="Click para abrir en Google Maps"
          >La Sabana #71, Luperón Puerto Plata, República Dominicana</a>
        </div>
      </div>
      <div class="quater">
        <h3>Número de Contacto</h3>
        <div class="info">
          <a href="tel:809-571-9821" target="_blank" title="Click para llamar">Tel: 809-571-9821</a>
        </div>
      </div>
      <div class="quater">
        <h3>Correo electrónico</h3>
        <div class="info">
          <a
            href="mailto:info@rottisrd.com.do"
            target="_blank"
            title="Click para enviar email"
          >info@rottisrd.com.do</a>
        </div>
      </div>
      <div class="quater">
        <h3>Redes Sociales</h3>
        <div class="info">
          <a href="#">
            <img
              class="social-logo"
              src="~/assets/images/socialmedia/facebook.png"
              alt="facebook logo"
            />
          </a>
          <a href="#">
            <img
              class="social-logo"
              src="~/assets/images/socialmedia/instagram.png"
              alt="instagram logo"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-secundary">
      <!-- copyright -->
      <div class="secundary-copyright">
        <p>Copyright © 2020 - Fabrica de Quesos Rottis. Todos los derechos reservados</p>
      </div>
      <div class="secundary-developer">
        <p class="duramente">
          Developed by
          <a href="#" target="_blank">Duramente Web Studio</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer h3 {
  color: #ffffff;
  font-size: 0.9em;
}
.footer-content {
  width: 100%;
  min-height: fit-content;
  padding: 75px 0;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: stretch;
}
.quater {
  width: 50%;
  padding: 0 50px;
  border-right: 2px solid #000;
}
.footer-content .quater:last-child {
  border-right: none;
}
.quater h3,
.info {
  text-align: center;
}
.quater .info a {
  text-decoration: none;
  color: #ffffff;
  font-size: 1.05em;
}
.quater .info a:hover {
  color: #d1d1d1;
}
.social-logo {
  width: 30px;
  padding: 0 5px;
}
.footer-secundary {
  width: 100%;
  background-color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.secundary-copyright p {
  padding: 5px 15px;
  margin: 0 50px;
  color: #fff;
  font-size: 11px;
}
.secundary-developer p {
  padding: 0 15px 5px 15px;
  margin: 0 50px;
  color: #fff;
  font-size: 11px;
}
.secundary-developer a {
  font-size: 11px;
  text-decoration: none;
  color: rgb(33, 150, 243);
}
.secundary-developer a:hover {
  color: rgb(76, 175, 80);
}

/* media query mobile */
@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
  }
  .quater {
    width: 75%;
    padding: 15px 0;
    border-right: none;
    border-bottom: 2px solid #000;
  }
  .footer-content .quater:last-child {
    border-right: none;
    border-bottom: none;
  }
  .secundary-copyright p {
    text-align: center;
  }
}
</style>
