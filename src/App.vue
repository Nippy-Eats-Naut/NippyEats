<template>
  <NavbarLogin v-if="Login"/>
  <NavbarNoLogin v-if="NoLogin"/>
  <router-view></router-view>
  <Footer />
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
      Login(){
        return localStorage.getItem('nippy.token') !== null && this.$route.meta.class !== 'Auth'
      },
      NoLogin(){
        return localStorage.getItem('nippy.token') === null && this.$route.meta.class !== 'Auth'
      }
    }
}
</script>

<style>
</style>
