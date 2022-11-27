<template>
    <div class="page-log-in">
      <div class="logo" >
            <img src="@/assets/image3.jpg" />
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Login</h1>


                <form @submit.prevent="submitForm">
                    <div class="cabecalho">
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
                    
                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Login</button>
                        </div>
                    </div>

                    <hr>

                    <router-link to="/cadastro">clique aqui</router-link> para se Cadastrar!
                </form>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
}
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