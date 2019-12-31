<template>
  <section class="info">
    <div class="info-header">
      <div class="header-wraper">
        <h1 class="normal">
          Gracias por su interes en
          <span>Fabrica Rottis</span>
        </h1>
        <h2>Sus comentarios o inquietudes son de gran importancia para nosotros.</h2>
      </div>
    </div>
    <hr />
    <div class="info-container">
      <div class="info-form">
        <Form />
      </div>
      <div class="info-contacto">
        <InfoContacto />
      </div>
    </div>
    <hr />
    <div class="info-negocios">
      <InfoNegocios />
    </div>
  </section>
</template>

<script>
//components
import Form from "~/components/Form.vue";
import InfoContacto from "~/components/info/InfoContacto.vue";
import InfoNegocios from "~/components/info/InfoNegocios.vue";

export default {
  components: {
    Form,
    InfoContacto,
    InfoNegocios
  }
};
</script>

<style scoped>
hr {
  /* margin: 25px 0; */
}
h2 {
  text-align: center;
}
.info {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 50px auto; */
}
.info-header{

}
.header-wraper{
  margin: 50px 0;
}
.normal {
  font-family: "gotham";
  color: #666;
  margin: 0 0 30px 0;
}
.normal span {
  color: #c00000;
  font-weight: bold;
}
.info p,
h1 {
  text-align: center;
}
.info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.info-form,
.info-contacto {
  width: 45%;
}
</style>
