<template>
  <div class="error">
    <div v-if="error.statusCode === 404">
      <h1 class="center">Sorprise, you found an error!</h1>
      <table>
        <tr>
          <td class="left">Code:</td>
          <td>{{error.statusCode}}</td>
        </tr>
        <tr>
          <td class="left">Message:</td>
          <td>{{error.message}}</td>
        </tr>
      </table>
    </div>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
table{
  margin: 0 auto;
}
td{
  padding: 0 10px;
}
.error{
  height: 25vh;
  margin: calc(75% - 51vh) 0;
}
.center{
  text-align: center;
}
.left{
  text-align-last: end;
}
</style>