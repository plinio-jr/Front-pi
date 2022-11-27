<template>
    <div class="page-sign-up">
        <div class="columns">
          <div class="logo">
                    <img src="@/assets/image7.webp" />
                  </div>
            <div class="column is-5 is-offset-1">
                <h1 class="title">Cadastro</h1>
                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Email</label>
                    <div class="control">
                        <input type="text" class="input" v-model="username">
                    </div>
                    </div>

                    <div class="field">
                        <label>Senha</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password">
                    </div>
                    </div>

                    <div class="field">
                        <label>Confirmar senha</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password2">
                    </div>
                    </div>
                    
                    <div class="notidication is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>
                        <div class="field">
                                                <div class="control">
                                                    <button class="button is-dark">Cadastrar</button>
                                                </div>
                                            </div>
                    <hr>

                    <router-link to="/login">clique aqui</router-link> para fazer login
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CadastroView',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: []
        }
    },
   
}
</script>

<style scoped>
.logo img{
  width: 100vw;
  height: 100vh;
}
.logo {
  width: 100vw;
  height: 10vw;
}

</style>