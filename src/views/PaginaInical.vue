<template>
  <template>
  <v-app id="body" style="background-color: #1d6382" view="lHh Lpr lFf">
    <v-container class="context"></v-container>
    <div
      style="background-color: #1d6382; padding-top: 10%"
      class="text-container"
    >
      <div class="sphere-cube"></div>
      <div class="cube"></div>
      <div class="cube">
        <div class="image1"></div>
      </div>
      <div class="text">
        <div class="text text-shadow">
          <b> Lista de Compras Digital</b>
        </div>
        <div class="text pt-3 text-shadow">
          O Controle de acesso à Fábrica de Software, referido pelo acrônimo
          C.A.F.S, é um sistema que busca auxiliar os coordenadores e as suas
          equipes a gerenciarem a sua jornada de trabalho previamente
          estabelecida.
        </div>
      </div>
    </div>

    <v-app-bar class="context" flat outlined color="#1D6382">
      <div class="btn-container">
        <div>
          <Cadastro class="overlap" />
        </div>
        <v-divider class="mx-4" dark vertical></v-divider>
        <div>
          <Login />
        </div>
      </div>
    </v-app-bar>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </v-app>
</template>

<script>
import Login from "../components/Login.vue";
import Cadastro from "../components/Cadastro.vue";

export default {
    components: {
    Login,
    Cadastro,
  },

}
</script>

<style>

</style>