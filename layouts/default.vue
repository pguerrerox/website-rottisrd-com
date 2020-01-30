<template>
  <div class="layout">
    <Header :logo="logo" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
// data
import media from "~/data/media.json";

// components
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

// others
import "~/assets/css/normalize.css";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      logo: media.mainLogo
    };
  }
};
</script>

<style>
html,
body {
  font-family: "gotham";
}
.layout {
  max-width: 1250px;
  margin: 0 auto;
}
h1 {
  font-family: markinson;
  font-size: 3.5em;
  font-weight: normal;
  margin: 0.25em 0;
  color: #c00000;
}
h2 {
  font-size: 1.5em;
  font-weight: normal;
  margin: 10px 0;
  color: #666;
}
h3 {
  font-size: 1.2em;
  color: #666;
  font-weight: normal;
  margin: 5px 0;
}
p {
  font-size: 1em;
  line-height: 1.5em;
  text-align: justify;
  color: #333;
}

/* buttons */
a.button,
.button {
  background-color: #c00000;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  margin: 15px;
}
a.button:hover,
.button:hover {
  background-color: #ffffff;
  border-right: 2px solid #c00000;
  border-left: 2px solid #c00000;
  color: #c00000;
}
</style>
