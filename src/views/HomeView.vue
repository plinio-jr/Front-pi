<template>
  <div class="home">
    <div class="logo">
      <router-view></router-view>
                    <img src="@/assets/image1.webp" />

                    <div class="home">
    <section class="heri is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Bem vindo
        </p>
        <p class="subtitle">
          Precisa de ajuda para lembrar o que comprar?
        </p>
      </div>

    </section>

    <div class="columns is multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Listas:</h2>
        

      </div>

    
          
    </div>
  </div>
              </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>

<style scoped>
.logo img{
  width: 100vw;
  height: 100vh;
}
.logo {
  width: 100vw;
  height: 45vw;
}
</style>