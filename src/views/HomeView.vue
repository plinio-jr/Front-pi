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
          <div>
            <div class="card" style="width: 18rem">
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <li v-for="lista in listas" :key="lista.id">
                  <img src="" class="card-img-top" alt="" />
                  <span @click="editar(lista)">
                    <h5 class="card-title">{{ lista.nome }}</h5>
                    <p class="card-text">{{ lista.descricao }}</p>
                    <a href="/listas" class="btn btn-primary">Ver</a>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ListasApi from "@/api/lista";
const listasApi = new ListasApi();
export default {
  data() {
    return {
      listas: [],
      lista: {},
    };
  },
  async created() {
    this.listas = await listasApi.buscarTodasAsListas();
  },
  methods: {
    async salvar() {
      if (this.listas.id) {
        await listasApi.atualizarLista(this.lista);
      } else {
        await listasApi.adicionarLista(this.lista);
      }
      this.lista = {};
      this.listas = await listasApi.buscarTodasAsListas();
    },
    editar(lista) {
      Object.assign(this.lista, lista);
    },
    async excluir(lista) {
      await listasApi.excluirLista(lista.id);
      this.listas = await listasApi.buscarTodasAsLista();
    },
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
