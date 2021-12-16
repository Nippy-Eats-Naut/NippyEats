<template>

  <div v-if="auth"></div>

  <div v-else>
    <NavbarLogin id="navbar" v-if="loggedIn || address"/>
    <NavbarNoLogin v-else/>
  </div>

  <router-view></router-view>

  <Footer v-if="!auth"/>

  <div :class="overlay==true? 'modal-backdrop show fade':''"></div>
</template>

<script>
import Footer from './components/Footer.vue'
import NavbarLogin from './components/NavbarLogin.vue'
import NavbarNoLogin from './components/NavbarNoLogin.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    NavbarLogin, Footer,NavbarNoLogin
  },
  computed:{
    ...mapGetters([ 'overlay', 'address' ]),
    ...mapGetters('auth', ['loggedIn']),
    auth(){
      return this.$route.meta.class === "Auth"
    },
  }
}
</script>

<style>
  .modal-backdrop{
    z-index: 1030
  }
</style>
