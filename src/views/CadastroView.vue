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
            <input type="text" v-model="auth.username" id="username" />
            <i class="fas fa-exclamation-circle"></i>
            <i class="fas fa-check-circle"></i>
            <small></small>
          </div>

          <div class="form-control">
            <label for="email">E-mail</label>
            <input type="text" v-model="auth.email" id="email" />
            <i class="fas fa-exclamation-circle"></i>
            <i class="fas fa-check-circle"></i>
            <small></small>
          </div>

          <div class="form-control">
            <label for="password">Senha</label>
            <input type="password" v-model="auth.password1" id="password" />
            <i class="fas fa-exclamation-circle"></i>
            <i class="fas fa-check-circle"></i>
            <small></small>
          </div>

          <div class="form-control">
            <label for="password">Confirme a sua senha</label>
            <input type="password" v-model="auth.password2" id="password" />
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
        await axios.post("https://pliniojr.pythonanywhere.com/auth/registration/", this.auth);
        alert("Usuario criado com sucesso");
        this.$router.push("/login");
      } catch (e) {
        alert("Algum erro");
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.body {
  width: 100%;
  min-height: 100vh;
  background: url(@/assets/image3.jpg) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  opacity: 0.9;
}
.container {
  background-color: #3b6863;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 100%;
  overflow: hidden;
}
.header {
  background-color: #eee;
  padding: 20px;
  color: #000000;
}
.form {
  padding: 15px;
}
.form-control {
  padding-bottom: 10px;
  position: relative;
}
.form-control label {
  display: inline-block;
}
.form-control input {
  display: block;
  font-size: 14px;
  width: 100%;
  padding: 10px;
}
.form-control i {
  position: absolute;
  top: 45px;
  right: 10px;
  visibility: hidden;
}
.form-control small {
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}
.form button {
  background-color: #65fc00;
  color: rgb(0, 0, 0);
  font-size: 14px;
  width: 100%;
  padding: 10px;
}
.form-control.success input {
  border-color: #2ecc71;
}
.form-control.error input {
  border-color: #e74c3c;
}
.form-control.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}
.form-control.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}
.form-control.error small {
  visibility: visible;
  color: #e74c3c;
}
.logo img {
  width: 100vw;
  height: 100vh;
}
.logo {
  width: 100vw;
  height: 10vw;
}
</style>
