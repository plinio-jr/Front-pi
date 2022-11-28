<template>
    <div id="wrapper">
    <nav class="navbar">
      <div class="navbar-brand">

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu =!showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
          <div class="navbar-start">
            <div class="navbar-item">
              <form method="get" action="/search">
                <div class="field has-addons">
                  <div class="control">
                    <input type="text" class="input" placeholder="Pesquisar Lista" name="query">
                  </div>

                  <div class="control">
                    <button class="button is-success">
                      <span class="icon">
                        <SearchWeb />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          

        <div class="navbar-end">
          <router-link to="/home" class="navbar-item"><Home /> Home</router-link>
          <router-link to="/about" class="navbar-item"><DotsHorizontal />Sobre</router-link>
          <router-link to="/listas" class="navbar-item"><ListStatus />Listas</router-link>
          <router-link to="/produtos" class="navbar-item"><CartPlus />Produtos</router-link>
          <router-link to="/mercados" class="navbar-item"><StoreMarker />Mercados</router-link>
          <router-link to="/perfil" class="navbar-item"><AccountEdit/> perfil</router-link>
        
        
        </div>
      </div>
    </nav>

    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading}">
      <div class="lds-dual-ring"></div>
    </div>

    <section class="selection">
      <router-view/>
    </section>
    
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>
  </template>
  
  <style>
  </style>
  
  <script>
  import AccountEdit from 'vue-material-design-icons/AccountEdit.vue'
  import Home from 'vue-material-design-icons/Home.vue'
  import StoreMarker from 'vue-material-design-icons/StoreMarkerOutline.vue'
  import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
  import ListStatus from 'vue-material-design-icons/ListStatus.vue'
  import CartPlus from 'vue-material-design-icons/CartPlus.vue'
  import SearchWeb from 'vue-material-design-icons/SearchWeb.vue'
  
  export default{
  components: {AccountEdit, Home, StoreMarker, DotsHorizontal, ListStatus, CartPlus, SearchWeb}
  }
  
  </script>
  