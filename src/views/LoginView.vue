<template>
  <div class="body">
    <div class="container">
      <div class="header">
        <h2>Entre novamente no Success Student</h2>
      </div>

      <form id="form" class="form" @submit.prevent="logarUsuario">
        <div class="form-control">
          <label for="email">Username</label>
          <input
            type="text"
            v-model="auth.username"
            id="username"
            placeholder="Digite seu username"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="email">E-mail</label>
          <input
            type="text"
            v-model="auth.email"
            id="email"
            placeholder="Digite seu E-mail"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="password">Senha</label>
          <input
            type="password"
            v-model="auth.password"
            id="password"
            placeholder="Digite sua senha"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>
        <button type="submit" class="botao">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      auth: {},
    };
  },
  methods: {
    async logarUsuario() {
      try {
        await axios.post("http://localhost:8000/auth/login/", this.auth);
        alert("Usuario logado com sucesso");
      } catch (e) {
        alert("algum erro");
      }
    },
  },
};
</script>

<style scoped>
.logo img {
  width: 100vw;
  height: 100vw;
}
.logo {
  width: 100vw;
  height: 10vw;
}
</style>
