<template>
  <div class="page-sign-up">
    <div class="columns">
      <div class="logo">
        <img src="@/assets/image7.webp" />
      </div>
      <div class="column is-5 is-offset-1">
        <h1 class="title">Cadastro</h1>
        <form id="form" class="form" @submit.prevent="criarUsuario">
          <div class="form-control">
            <label for="username">Nome da conta</label>
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
              v-model="auth.password1"
              id="password"
              placeholder="Digite sua senha"
            />
            <i class="fas fa-exclamation-circle"></i>
            <i class="fas fa-check-circle"></i>
            <small></small>
          </div>

          <div class="form-control">
            <label for="password">Confirme a sua senha</label>
            <input
              type="password"
              v-model="auth.password2"
              id="password"
              placeholder="Confirme a sua senha"
            />
            <i class="fas fa-exclamation-circle"></i>
            <i class="fas fa-check-circle"></i>
            <small></small>
          </div>

          <button type="submit" class="botao">Enviar</button>
        </form>
      </div>
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
    async criarUsuario() {
      try {
        await axios.post("http://localhost:8000/auth/registration/", this.auth);
        alert("Usuario criado com sucesso");
      } catch (e) {
        alert("Algum erro");
      }
    },
  },
};
</script>

<style scoped>
.logo img {
  width: 100vw;
  height: 100vh;
}
.logo {
  width: 100vw;
  height: 10vw;
}
</style>
