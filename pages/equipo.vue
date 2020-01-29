<template>
  <section class="main">
    <Team :departamento="directores.departamento" :pics="directores.pics" />
    <Team :departamento="administrativos.departamento" :pics="administrativos.pics" :tres="true" />
    <Team :departamento="planta.departamento" :pics="planta.pics" />
    <Team :departamento="transporte.departamento" :pics="transporte.pics" />
    <Team :departamento="mantenimiento.departamento" :pics="mantenimiento.pics" />
    <Team :departamento="seguridad.departamento" :pics="seguridad.pics" />

  </section>
</template>

<script>
//data
import directoresInfo from "~/data/team/directores.json";
import administrativosInfo from "~/data/team/administrativos.json";
import plantaInfo from "~/data/team/planta.json";
import transporteInfo from "~/data/team/transporte.json";
import mantenimientoInfo from "~/data/team/mantenimiento.json";
import seguridadInfo from "~/data/team/seguridad.json";

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
      transporte: transporteInfo,
      mantenimiento: mantenimientoInfo,
      seguridad: seguridadInfo
    }
  }
}
</script>

<style>

</style>