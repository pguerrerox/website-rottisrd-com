<template>
  <section class="forma-empleo">
    <div class="forma-container" :style="styleBG">
      <div class="forma-text">
        <h2>
          ¿Quieres trabajar con nosotros?
        </h2>
        <p>
          Usando el siguiente formulario podras enviarnos tu
          <strong>curriculum vitae (CV)</strong>, no olvides completar con informacion real, de otra forma no podremos evaluarte.
          <br />El formulario solo permite enviar archivos PDF y el tamaño máximo es de 2 megabytes (MB).
        </p>
      </div>

      <div class="forma-wrapper">
        <div class="formulario-empleo">
          <form
            class="form-empleo"
            id="form-empleo"
            method="POST"
            action="https://static-email.herokuapp.com/empleo/rottis"
            enctype="multipart/form-data"
          >
            <!-- Testing
            <form class="form-empleo" id="form-empleo" method="POST" action="http://localhost:8000/empleo/testing" enctype="multipart/form-data">-->
            <input type="hidden" name="referrer" :value="referrer" />

            <label for="nombre">Nombre*</label>
            <span>
              <input name="nombre" type="text" placeholder="Jose Pérez" required="true" />
            </span>

            <label for="email">Email*</label>
            <span>
              <input name="email" type="email" placeholder="jose.perez@ejemplo.com" required="true" />
            </span>

            <label for="attachFile">Archivo*</label>
            <br />
            <span>
              <input name="attachFile" type="file" accept="application/pdf, .pdf" />
            </span>
            <div
              id="recaptcha"
              class="g-recaptcha"
              data-sitekey="6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI"
            ></div>
            <!-- Testing recaptcha -->
            <!-- <div id='recaptcha' class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div> -->

            <input class="button" type="submit" name="enviar" value="ENVIAR" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// data
import media from "~/data/media.json";

export default {
  data() {
    let bgBaseUrl = media.banners.contacto.empleoBG;
    return {
      referrer: document.URL,
      bgPath: require("~/assets/images/banners/contacto/" + bgBaseUrl + ".webp")
    };
  },
  computed: {
    styleBG() {
      return {
        "--background-Image": "url(" + this.bgPath + ")"
      };
    }
  }
};
</script>

<style scoped>
.forma-empleo {
  background: #fff;
  width: 100%;
  height: 700px;
  padding: 50px 0 0 0;
  display: flex;
  align-items: center;
}
.forma-container {
  background-image: var(--background-Image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 50px auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.forma-text {
  width: 500px;
  align-self: center;
  text-align: justify;
  margin: 15px;
}
.forma-text h2{
  font-weight:bold;
}
.forma-text h2,
p {
  color: rgb(75, 75, 75);
}
.forma-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
  align-self: center;
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
input[type="text"],
input[type="email"],
input[type="file"],
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
input[type="text"]:focus,
input[type="email"]:focus,
input[type="file"]:focus,
select:focus {
  border: 2px solid #c00000;
}
.button {
  width: 100%;
  margin: 0 auto;
}
.g-recaptcha {
  text-align: -webkit-center;
  margin: 5px auto 15px auto;
}

/* media query for mobile */
@media screen and (max-width:425px){
  .forma-empleo {
  height: 100%;
  padding: 50px 0 0 0;
}
  .forma-container {
  flex-direction: column;
  margin: 0;
}
.forma-text {
  width: 95%;
  /* padding: 15px; */
}
}
</style>