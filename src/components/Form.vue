<template>
	<section class="forma">
		<div class="forma-container">
			<h1>¿En qué podemos ayudarle?</h1>
			<div class="forma-wrapper">
				<div class="forma-text">
					<h3>
						<strong>En Rottis estamos para servirle.</strong><br/> Utilice el siguiente formulario, para ponerse en contacto con nuestro equipo de servicio, una vez recibido su mensaje le estaremos contactando para ofrecerle respuesta a su solicitud, inquietud
						o pregunta.
					</h3>
				</div>
				<div class="forma-contacto">
					<form class="form-contacto" method="POST" action="" enctype="multipart/form-data">
						<label for="nombre">Nombre</label>
						<span>
							<input name="name" type="text" placeholder="Jose Pérez" required="true">
						</span>
	
						<label for="e-mail">Email</label>
						<span>
							<input name="email" type="email" placeholder="jose.perez@ejemplo.com" required="true">
						</span>
	
						<label for="ciudad">Ciudad</label>
						<span>
							<input name="ciudad" type="text" placeholder="Santiago">
						</span>
	
						<label for="asunto">Asunto</label>
						<span>
							<input name="asunto" type="text" placeholder="Hola Rottis..." required="true">
						</span>
	
						<label for="tema">Tema</label>
						<span>
							<select name="tema" type="text" required="true">
								<option value="Solicitud de información">Solicitud de información</option>
								<option value="Sugerencias y/o Comentarios">Sugerencias y/o Comentarios</option>
								<option value="Servicio al cliente">Servicio al cliente</option>
							</select>
						</span>

						<label for="mensaje">Mensaje</label><br>
						<span>
							<textarea name="mensaje" rows="8" cols="40" placeholder="Escribe tu mensaje aqui..." required="true"></textarea>
						</span>
						<!-- <div class="g-recaptcha" data-sitekey="6LeW0hIUAAAAADCej2_UlXjqbLAd354s-X11oKRA"></div> -->
						<input class="button" type="submit" name="enviar" value="Enviar">
					</form>
				</div>
				<!-- <div class="forma-empleo">
							<h3>Solicitud de Empleo</h3>
							<p>Agradecemos el interés de pertenecer a nuestro equipo, envíanos tu Curriculum Vitae (CV).</p>
							<div class="div--mid">
								<a href="/pages/empleo.html">
									<button type="button" name="button">FORMULARIO</button>
								</a>
							</div>
						</div> -->
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.forma {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 50px auto;
}
.forma-container {
	width: 100%;
	max-width: 1440px;
}
.forma-container h1 {
	text-align: center;
}
.forma-wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-content: center;
}
.forma-text {
	width: 40%;
	align-self: center;
	text-align: justify;
}
.forma-text h3{
	font-size: 1.17em;
}
.forma-contacto {
	max-width: 600px;
	margin: 50px 25px;
	padding: 35px;
	background-color: #e0e0e0;
}
label {
	font-weight: bold;
	color: #c00000;
}
textarea,
input[type=text],
input[type=email],
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
input[type=text]:focus,
input[type=email]:focus,
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
}
hr {
	max-width: 1300px;
	width: 100%;
	border: 1px solid #003399;
	margin: 20px auto 20px auto;
	padding: 0 10px;
} 
.forma-empleo {
	padding: 50px;
}
.forma-empleo h3 {
	text-transform: uppercase;
	font-weight: bold;
}
.forma-empleo p {
	font-size: 20px;
} */
</style>