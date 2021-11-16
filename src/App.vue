<template>
  <NavbarLogin v-show="$route.name !== 'Login' || $route.name !== 'SignUp'"/>
  <!--<NavbarNoLogin />-->
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import NavbarLogin from './components/NavbarLogin.vue'
//import NavbarNoLogin from './components/NavbarNoLogin.vue'

export default {
  name: 'App',
  components: {
     NavbarLogin, Footer,//NavbarNoLogin
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
