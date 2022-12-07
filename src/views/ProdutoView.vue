<script>
import ProdutosApi from "@/api/produto";
const produtosApi = new ProdutosApi();
export default {
  data() {
    return {
      produtos: [],
      produto: {},
    };
  },
  async created() {
    this.produtos = await produtosApi.buscarTodosOsProdutos();
  },
  methods: {
    async salvar() {
      if (this.produtos.id) {
        await produtosApi.atualizarProduto(this.produto);
      } else {
        await produtosApi.adicionarProduto(this.produto);
      }
      this.produto = {};
      this.produtos = await produtosApi.buscarTodosOsProdutos();
    },
    async editar(produto) {
      Object.assign(this.produto, produto);
    },
    async excluir(produto) {
      await produtosApi.excluirProduto(produto.id);
      this.produtos = await produtosApi.buscarTodosOsProdutos();
    },
  },
};
</script>

<template>
  <h1>Produtos</h1>
  <div class="form">
    <input type="text" v-model="produto.nome" placeholder="nome" />
    <input type="text" v-model="produto.categoria" placeholder="categoria" />
    <input type="text" v-model="produto.quantidade" placeholder="quantidade" />
    <input type="text" v-model="produto.peso" placeholder="peso" />
    <input type="text" v-model="produto.preco" placeholder="preço" />
    <button class="button is-success" @click="salvar">Salvar</button>
  </div>
  <ul>
    <li v-for="produto in produtos" :key="produto.id">
      <span @click="editar(produto)">
        {{ produto.nome }} - {{ produto.categoria }} -{{ produto.quantidade }} -
        {{ produto.peso }} - {{ produto.preco }} - {{ produto.mercado }}
      </span>
      <button class="button is-warning" @click="editar(produto)">Editar</button>
      <button class="button is-danger" @click="excluir(produto)">
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
