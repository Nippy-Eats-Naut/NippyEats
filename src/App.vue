<template>
  <NavbarLogin id="navbar" v-if="isLoggedIn"/>
  <div v-else>
    <div v-if="auth"></div>
    <NavbarNoLogin v-else/>
  </div>
  <router-view></router-view>
  <Footer v-if="!auth"/>
</template>

<script>
import Footer from './components/Footer.vue'
import NavbarLogin from './components/NavbarLogin.vue'
import NavbarNoLogin from './components/NavbarNoLogin.vue'

export default {
  name: 'App',
  components: {
    NavbarLogin, Footer,NavbarNoLogin
  },
  computed:{
    auth(){
      return this.$route.meta.class === "Auth"
    },
    isLoggedIn(){
      return localStorage.getItem('nippy.token') != null
    }
  }
}
</script>

<style>
</style>
