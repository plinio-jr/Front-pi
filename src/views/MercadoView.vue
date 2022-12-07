<script>
import MercadosApi from "@/api/mercado";
const mercadosApi = new MercadosApi();
export default {
  data() {
    return {
      mercados: [],
      mercado: {},
    };
  },
  async created() {
    this.mercados = await mercadosApi.buscarTodosOsMercados();
  },
  methods: {
    async salvar() {
      if (this.mercados.id) {
        await mercadosApi.atualizarMercado(this.mercado);
      } else {
        await mercadosApi.adicionarMercado(this.mercado);
      }
      this.mercado = {};
      this.mercados = await mercadosApi.buscarTodosOsMercados();
    },
    editar(mercado) {
      Object.assign(this.mercado, mercado);
    },
    async excluir(mercado) {
      await mercadosApi.excluirMercado(mercado.id);
      this.mercados = await mercadosApi.buscarTodosOsMercados();
    },
  },
};
</script>

<template>
  <h1>Mercados</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="mercado.nome" placeholder="Nome" />
    <input type="text" v-model="mercado.rua" placeholder="Rua" />
    <input type="text" v-model="mercado.bairro" placeholder="Bairro" />
    <input type="text" v-model="mercado.cidade" placeholder="Cidade" />
    <input type="text" v-model="mercado.avaliacao" placeholder="avaliação" />
    <button class="button is-success" @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="mercado in mercados" :key="mercado.id">
      <span @click="editar(mercado)">
        {{ mercado.nome }} - {{ mercado.rua }} -{{ mercado.bairro }} -
        {{ mercado.cidade }} - {{ mercado.avaliacao }}
      </span>
      <button class="button is-warning" @click="editar(mercado)">Editar</button>
      <button class="button is-danger" @click="excluir(mercado)">
        Excluir
      </button>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  text-transform: uppercase;
  font-size: 30pt;
  font-weight: 900;
  background: -webkit-linear-gradient(45deg, #0044ff, #00eeff, #00ffdd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.all {
  margin-top: 10rem;
  width: 100%;
  height: 100vh;
}

h1 {
  margin-top: 20px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button.is-success {
  margin-top: 20px;
  width: 200px;
  background-color: hsl(153deg, 53%, 53%);
  border-color: transparent;
  color: #fff;
}

input {
  margin-top: 10px;
}
</style>