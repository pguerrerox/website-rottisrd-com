<template>
  <section class="forma-contacto">
    <div class="forma-container">
      <h2>
        ¿En qué podemos
        <strong>ayudarle</strong>?
      </h2>

      <div class="forma-text">
        <p>
          En
          <strong>Rottis estamos para servirle</strong>, utilice el siguiente formulario, para ponerse en contacto con nuestro equipo de servicio, una vez recibido su mensaje le estaremos contactando para ofrecerle respuesta a su solicitud, inquietud o pregunta.
        </p>
      </div>

      <div class="forma-wrapper">
        <div class="formulario-contacto">
          <form class="form-contacto" method="POST" action="https://static-email.herokuapp.com/contacto/rottis" enctype="multipart/form-data">
          <!-- <h1>Testing</h1>
          <form class="form-contacto" method="POST" action="http://localhost:8000/contacto/testinggg" enctype="multipart/form-data"> -->
            <input type="hidden" name="referrer" :value="referrer" >

            <label for="nombre">Nombre</label>
            <span>
              <input name="name" type="text" placeholder="Jose Pérez" required="true" />
            </span>

            <label for="e-mail">Email</label>
            <span>
              <input name="email" type="email" placeholder="jose.perez@ejemplo.com" required="true" />
            </span>

            <label for="ciudad">Ciudad</label>
            <span>
              <input name="ciudad" type="text" placeholder="Santiago" />
            </span>

            <label for="asunto">Asunto</label>
            <span>
              <input name="asunto" type="text" placeholder="Hola Rottis..." required="true" />
            </span>

            <label for="tema">Tema</label>
            <span>
              <select name="tema" type="text" required="true">
                <option value="Solicitud de información">Solicitud de información</option>
                <option value="Sugerencias y/o Comentarios">Sugerencias y/o Comentarios</option>
                <option value="Servicio al cliente">Servicio al cliente</option>
              </select>
            </span>

            <label for="mensaje">Mensaje</label>
            <br />
            <span>
              <textarea
                name="mensaje"
                rows="8"
                cols="40"
                placeholder="Escribe tu mensaje aqui..."
                required="true"
              ></textarea>
            </span>

            <div id='recaptcha' class="g-recaptcha" data-sitekey="6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI"></div>
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
export default {
  data(){
    return{
      referrer: document.URL,
    }
  }
};
</script>

<style scoped>
.forma-contacto {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 25px auto;
}
.forma-container {
  width: 100%;
  /* max-width: 1440px; */
  /* margin: 0 20px; */
}
.forma-text {
  align-self: center;
  text-align: justify;
}
.forma-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.formulario-contacto {
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
</style>
