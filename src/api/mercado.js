import axios from 'axios';
export default class MercadosApi {
  async buscarTodosOsMercados() {
    const { data } = await axios.get('api/mercados/');
    return data;
  }
  async adicionarMercado(mercado) {
    const { data } = await axios.post('api/mercados/', mercado);
    return data;
  }
  async atualizarMercado(mercado) {
    const { data } = await axios.put(`api/mercados/${mercado.id}/`, mercado);
    return data;
  }
  async excluirMercado(id) {
    const { data } = await axios.delete(`api/mercados/${id}/`);
    return data;
  }
}