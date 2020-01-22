<template>
  <section class="main">
    <Team :departamento="directores.departamento" :pics="directores.pics" />

  </section>
</template>

<script>
//data
import directoresInfo from "~/data/team/directores.json";
import administrativos from "~/data/team/administrativos.json";

// components
import Team from "~/components/Team";

export default {
  components: {
    Team
  },
  data() {
    return {
      directores: directoresInfo,
    }
  }
}
</script>

<style>

</style>