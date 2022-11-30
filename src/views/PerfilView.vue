<template>
   <div class="page-my-account">
        <div class="columns is-multiline">
            <div class="column is-6 is-offset-5">
                <h1 class="title">Perfil</h1>
            </div>

            <div class="column is-12">
                <button @click="logout()" class="button is-danger">Sair</button>
            <div class="column is-12">
                <h2 class="subtitle">Meus Dados</h2>

                <form @submit.prevent="submitDados">
                <div class="field">
                        <label>nome</label>
                    <div class="control">
                        <input type="text" class="input" v-model="firstname">
                    </div>
                    </div>

                    <div class="field">
                        <label>Sobrenome</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="lastname">
                    </div>
                    </div>

                    <div class="field">
                        <label>Email</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="email">
                    </div>
                    </div>
                    
                    </form>
                    
                    <br>
                    <div class="field">
                        <div class="control">
                            <button class="button is-success" @click="save">Salvar</button>
                            
                            <button class="button is-warning" @click="editar">Editar</button>

                            <button class="button is-danger" @click="deletar">Excluir</button>
                        </div>
                    </div>
                    
                            
                        </div>
                    </div>

            
            </div>

            

                </div>
</template>

<script>
import axios from 'axios'
export default {
        name:'PerfilView.vue',
        methods: {
  logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$router.push('/')
      
        },
      }
    }
</script>

<style>

</style>