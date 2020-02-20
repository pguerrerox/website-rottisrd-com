<template>
  <section class="info-informacion">
    <h2 class="bold">
      Para contactarnos
    </h2>
    <hr />
    <div class="info-contacto">
      <h2 class>
        <strong>Vía telefónica</strong> al siguiente número:
      </h2>
      <h3>
        <a href="tel:809-571-9821" target="_blank" title="Click para llamar">(809) 571-9821</a>
      </h3>
    </div>
    <hr />
    <div class="info-contacto">
      <h2 class>
        En nuestras
        <strong>redes sociales</strong>:
      </h2>
      <h3>
        <a href="#">Facebook</a>
        <br />
      </h3>
      <h3>
        <a href="#">Instagram</a>
        <br />
      </h3>
    </div>
    <hr />
    <div class="info-contacto">
      <h2 class>
        Nuestro
        <strong>horario laboral</strong> es:
      </h2>
      <h3>
        <strong>Lunes a Viernes</strong>
        <br />8:00 am / 5:00 pm
      </h3>
      <br />
      <h3>
        <strong>Sabados</strong>
        <br />8:00 am / 12:00 pm
      </h3>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.bold{
  font-weight:bold;
}
.info-informacion {
  display: flex;
  flex-flow: column;
  width: 100%;
}
h2 {
  text-align: center;
  font-size: 1.5em;
}
.info-contacto {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 50px;
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