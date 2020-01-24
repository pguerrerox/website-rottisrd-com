<template>
  <section class="main">
    <Team :departamento="directores.departamento" :pics="directores.pics" />
    <Team :departamento="administrativos.departamento" :pics="administrativos.pics" />
    <Team :departamento="planta.departamento" :pics="planta.pics" />
    <Team :departamento="transportacion.departamento" :pics="transportacion.pics" />
    <Team :departamento="layout.departamento" :pics="layout.pics" />

  </section>
</template>

<script>
//data
import directoresInfo from "~/data/team/directores.json";
import administrativosInfo from "~/data/team/administrativos.json";
import plantaInfo from "~/data/team/planta.json";
import transportacionInfo from "~/data/team/transportacion.json";
import layoutInfo from "~/data/team/layout.json";

// components
import Team from "~/components/Team";

export default {
  components: {
    Team
  },
  data() {
    return {
      directores: directoresInfo,
      administrativos: administrativosInfo,
      planta: plantaInfo,
      transportacion: transportacionInfo,
      layout: layoutInfo
    }
  }
}
</script>

<style>

</style>