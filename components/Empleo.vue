<template>
  <section class="forma-empleo" :style="styleBG" >
    <div class="forma-container">
      <div class="forma-text">
        <h2>¿Quieres <strong>trabajar</strong> con nosotros?</h2>
        <p>
          Usando el siguiente formulario podras enviarnos tu <strong>curriculum vitae (CV)</strong>, no olvides completar con informacion real, de otra forma no podremos evaluarte.<br>
          El formulario solo permite enviar archivos PDF y el tamaño máximo es de 2 megabytes (MB).
        </p>
      </div>

      <div class="forma-wrapper">
        <div class="formulario-empleo">
          <!-- PENDING ACTION -->
          <form class="form-empleo" method="POST" action="" enctype="multipart/form-data">
            <label for="name">Nombre*</label>
            <span>
              <input name="name" type="text" placeholder="Jose Pérez" required="true">
            </span>

            <label for="email">Email*</label>
            <span>
              <input name="email" type="email" placeholder="jose.perez@ejemplo.com" required="true">
            </span>

            <label for="afile">Archivo*</label><br>
            <span>
              <input name="afile" type="file" accept="application/pdf,.pdf " required="true">
            </span>

            <!-- RECAPTCHA DIV -->
            <!-- <div class="g-recaptcha" data-sitekey="6LeW0hIUAAAAADCej2_UlXjqbLAd354s-X11oKRA"></div> -->
            <input class="button" type="submit" name="enviar" value="ENVIAR">
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
// data
import media from '~/data/media.json';

export default {
  data(){
    let bgBaseUrl = media.banners.contacto.empleoBG;
    return {
      bgPath: require('~/assets/images/banners/contacto/' + bgBaseUrl + '.webp'),
    }
  },
  computed: {
    styleBG(){
      return {
        '--background-Image': 'url(' + this.bgPath + ')',
      }
    }
  }
}
</script>

<style scoped>
.forma-empleo {
  background-image: var(--background-Image);
  background-image: var(--background-Image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  height: 700px;
  margin: 50px auto;
  display: flex;
  align-items: center;
}
.forma-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

	/* max-width: 1440px; */
	/* margin: 0 20px; */
}
.forma-text{
  width: 500px;
  align-self: center;
	text-align: justify;
}
.forma-text h2, p{
  color: #fff;
}
.forma-wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.formulario-empleo {
	max-width: 500px;
	margin: 50px 25px;
	padding: 35px;
	background-color: #e0e0e0;
}
label {
	font-weight: bold;
	color: #c00000;
}
textarea,
input[type='text'],
input[type='email'],
input[type='file'],
select {
	display: inline-block;
	width: 100%;
	margin: 5px 0 15px 0;
	padding: 10px;
	border: 2px solid #ccc;
	box-sizing: border-box;
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
textarea:focus,
input[type='text']:focus,
input[type='email']:focus,
input[type='file']:focus,
select:focus {
	border: 2px solid #c00000;
}
.button {
	width: 100%;
	margin: 0 auto;
}
/* .g-recaptcha {
	text-align: -webkit-center;
	margin: 5px auto 15px auto;
}  */
</style>