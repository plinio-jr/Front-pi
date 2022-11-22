import axios from 'axios';
export default class ListasApi {
  async buscarTodasAsListas() {
    const { data } = await axios.get('/listas/');
    return data;
  }
  async adicionarLista(lista) {
    const { data } = await axios.post('/listas/', lista);
    return data;
  }
  async atualizarLista(lista) {
    const { data } = await axios.put(`/listas/${lista.id}/`, lista);
    return data;
  }
  async excluirlista(id) {
    const { data } = await axios.delete(`/listas/${id}/`);
    return data;
  }
}