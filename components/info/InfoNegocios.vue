<template>
  <section class="info-negocios">
    <div class="negocios-internacionales">
      <h2>Negocios Internacionales y Exportaciones</h2>
      <p>
        Para informaciones de negocios internacionales y exportaciones, contacte nuestro departamento de exportaciones.
        <strong>Tel. (809) 241-2285</strong>
      </p>
      <p>
        También puedes contactarnos vía correo electrónico a la dirección:
        <strong>
          <a mailto="aperez@expi.com.do">aperez@expi.com.do</a>
        </strong>
      </p>
    </div>
    <div class="vertical-line"></div>
    <div class="negocios-locales">
      <h2>Negocios Internacionales y Exportaciones</h2>
      <p>
        Para informaciones de negocios en República Dominicana, contacte nuestro departamento de servicio al cliente.
        <strong>Tel. (809) 571-9821</strong>
      </p>
      <p>
        También puedes contactarnos vía correo electrónico a la dirección:
        <strong>
          <a mailto="info@rottisrd.com.do">info@rottisrd.com.do</a>
        </strong>
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.info-negocios {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
}
.negocios-internacionales,
.negocios-locales {
  width: 40%;
}
.negocios-internacionales .negocios-locales,
h2 {
  text-align: center;
}
.negocios-internacionales .negocios-locales,
p {
  text-align: center;
}
.vertical-line {
  display: block;
  height: 80%;
  border: 1px solid #c00;
}
</style>