<template>
  <Layout>
		<Info />
		<hr>
		<Form />
  </Layout>
</template>

<script>
import Info from "~/components/Info.vue";
import Form from "~/components/Form.vue";

export default {
	components: {
		Info,
		Form,

	},
  metaInfo: {
    title: 'Contacto'
  }
}
</script>
 
 <style scoped>
hr{
	width: 25%;
	border: 1px solid #c00000;
	margin: 20px auto 20px auto;
	padding: 0 10px;
}
</style>