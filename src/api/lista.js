import axios from 'axios';
export default class ListasApi {
  async buscarTodasAsListas() {
    const { data } = await axios.get('api/listas/');
    return data;
  }
  async adicionarLista(lista) {
    const { data } = await axios.post('api/listas/', lista);
    return data;
  }
  async atualizarLista(lista) {
    const { data } = await axios.put(`api/listas/${lista.id}/`, lista);
    return data;
  }
  async excluirLista(id) {
    const { data } = await axios.delete(`api/listas/${id}/`);
    return data;
  }
}