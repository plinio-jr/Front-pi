import axios from 'axios';
export default class MercadosApi {
  async buscarTodosOsMercados() {
    const { data } = await axios.get('/mercados/');
    return data;
  }
  async adicionarMercado(mercado) {
    const { data } = await axios.post('/mercados/', mercado);
    return data;
  }
  async atualizarMercado(mercado) {
    const { data } = await axios.put(`/mercados/${mercado.id}/`, mercado);
    return data;
  }
  async excluirMercado(id) {
    const { data } = await axios.delete(`/mercados/${id}/`);
    return data;
  }
}