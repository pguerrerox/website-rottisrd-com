<template>
	<section class="info">
		<h1>Puedes contactarnos, usando cualquiera de estos medios.</h1>

		<div class="info-informacion">
			<div class="info-contacto">
				<p class=""><strong>Vía telefónica</strong> al siguiente número:</p>
				<h3>
					<a href="tel:809-571-9821" target="_blank" title="Click para llamar">
						Tel: 809-571-9821
					</a>
				</h3>
			</div>
	
			<div class="info-contacto">
				<p class="">En nuestras <strong>redes sociales</strong>:</p>
				<h3><a href="" target="_blank">Facebook</a><br></h3>
				<h3><a href="" target="_blank">Instagram</a><br></h3>
				<h3><a href="" target="_blank">LinkedIn</a></h3>
			</div>
	
			<div class="info-contacto">
				<p class="">Nuestro <strong>horario laboral</strong> es:</p>
				<h3>Lunes a Viernes <br>7:30 am / 5:00 pm</h3>
				<br>
				<h3>Sabados <br>8:00 am / 12:00 pm</h3>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.info {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 75px auto;
}
.info h1 {
	text-align: center;
}
.info-informacion {
	display: flex;
	flex-flow: row;
	justify-content: center;
	margin: 25px 0 0 0;
	width: 100%;
}
.info-contacto {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 50px;
	text-align: center;
}
.info-contacto a {
	text-decoration: none;
	color: inherit;
	font-style: normal;
}
.info-contacto a:hover,
.info-contacto a:focus,
.info-contacto h3:hover {
	color: #c00000;
	/* font-weight: bold; */
}
.info-contacto h3 {
	font-size: 1.17em;
}
strong {
	color: #c00000;
}
</style>