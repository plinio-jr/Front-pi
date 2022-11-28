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
    editar(produto) {
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
<div class="logo">
                    <img src="@/assets/image2.webp" />
              </div>
  <h1>Produtos</h1>
  <div class="form">
    <input type="text" v-model="produto.nome" placeholder="nome" />
    <input type="text" v-model="produto.categoria" placeholder="categoria" />
    <input type="text" v-model="produto.quantidade" placeholder="quantidade" />
    <input type="text" v-model="produto.peso" placeholder="peso" />
    <input type="text" v-model="produto.preco" placeholder="preço">
    <button @click="salvar">Salvar</button>
  </div>
  <ul>
    <li v-for="produto in produtos" :key="produto.id">
      <span @click="editar(produto)">
       {{ produto.nome }} - {{ produto.categoria }} -{{ produto.quantidade }} - {{ produto.peso }} - {{ produto.preco }} - {{ produto.mercado }}
      </span>
      <button @click="excluir(produto)">X</button>
      <button @click="editar(produto)">E</button>
    </li>
  </ul>
</template>

<style scoped>
.logo img{
  width: 100vw;
  height: 100vh;
}


</style>