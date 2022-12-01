import axios from 'axios';
export default class ProdutosApi {
  async buscarTodosOsProdutos() {
    const { data } = await axios.get('api/produtos/');
    return data;
  }
  async adicionarProduto(produto) {
    const { data } = await axios.post('api/produtos/', produto);
    return data;
  }
  async atualizarProduto(produto) {
    const { data } = await axios.put(`api/produtos/${produto.id}/`, produto);
    return data;
  }
  async excluirProduto(id) {
    const { data } = await axios.delete(`api/produtos/${id}/`);
    return data;
  }
}