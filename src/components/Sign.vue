<template>
  <section class="sign">
    <div class="sign-wraper">
      <div class="sign-message">
        <h1>La calidad es tradicion</h1>
        <h3>Conoce toda la calidad de nuestros productos</h3>
      </div>
      <div class="sign-logos">
        <g-image src="~/assets/images/logos/rottis-logo.png" width="150px" alt="Rottis Logo" background="#ffffff" blur="50" quality="100"/>
        <g-image src="~/assets/images/logos/baruk-logo.png" width="150px" alt="Baruk Logo" background="#ffffff" blur="50" quality="100"/>
        <g-image src="~/assets/images/logos/nauj-logo.png" width="150px" alt="Nauj Logo" background="#ffffff" blur="50" quality="100"/>
        <g-image src="~/assets/images/logos/costero-logo.png" width="150px" alt="Costero Logo" background="#ffffff" blur="50" quality="100"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .sign{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
  }
  .sign-wraper{
    width: 1470px;
  }
  .sign-message{
    text-align: center;
    margin-bottom: 30px
  }
  .sign-message h1{
    margin: 0;
  }
  .sign-message h3{
    color: #999999;
    margin-top: 0;
  }
  .sign-logos{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center
  }
  .sign-logos img{
    height: fit-content;
  }

</style>