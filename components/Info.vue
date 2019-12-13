<template>
	<section class="info">
		<h1 class="normal">Gracias por su interes en <span><br>Fabrica de Quesos Rottis</span></h1>
		<h2><strong>Puedes contactarnos</strong>, usando cualquiera de estos medios.</h2>
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
				<h3><a href="#" >Facebook</a><br /></h3>
				<h3><a href="#" >Instagram</a><br /></h3>
				<h3><a href="#" >LinkedIn</a></h3>
			</div>

			<div class="info-contacto">
				<p class="">Nuestro <strong>horario laboral</strong> es:</p>
				<h3>Lunes a Viernes <br />8:00 am / 5:00 pm</h3>
				<br />
				<h3>Sabados <br />8:00 am / 12:00 pm</h3>
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
	margin: 50px auto;
}
.normal{
	font-family: 'gotham';
	color: #666;
	margin:0 0 30px 0;

}
.normal span{
	color: #c00000;
	font-weight: bold;
}
.info p, h1{
	text-align: center;
}
.info-informacion {
	display: flex;
	flex-flow: row;
	justify-content: space-around;
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
}
strong {
	color: #c00000;
}
</style>
