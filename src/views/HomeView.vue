<template>
  <div class="body">
    <div class="home">
      <div class="bnv">
        <h1>Ola 'USUARIO'</h1>
      </div>
      <section class="heri is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
          <p class="title mb-6">Bem vindo</p>
          <p class="subtitle">Precisa de ajuda para lembrar o que comprar?</p>
          <h2 class="is-size-2 has-text-centered">Listas:</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import { mapState } from "pinia";
export default {
  name: "HomeView",
  components: {},
  computed: {
    // ...mapState("auth", ["user"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Montserrat";
}

p {
  text-transform: uppercase;
  background: -webkit-linear-gradient(45deg, #0400ff, #0099ff, #00ffdd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bnv {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  text-transform: uppercase;
  font-size: 30pt;
  background: -webkit-linear-gradient(45deg, #0044ff, #00eeff, #00ffdd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}
</style>
