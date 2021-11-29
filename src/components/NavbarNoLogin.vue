<template>
    <nav class="navbar">
        <div class="container-fluid">
            <div class="nav-item">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i class="bi bi-justify"></i>
                </button>
                <SidenavNoLogin />
                <router-link to="/home" class="navbar-brand">
                    <img src="@/assets/images/logo.png" alt="Nippyeats logo" :width="desktop ?180:90" :height="desktop ?39:30">
                </router-link>
            </div>
            <div class="nav-item">
                <router-link to="/login" class="btn btn-primary text-white">
                    <i class="bi bi-person" v-if="!desktop"></i>Login/Sign Up
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
import SidenavNoLogin from "./SidenavNoLogin.vue";
export default{
    name: "NavbarNoLogin",
    inject: ["mq"],
    components: { SidenavNoLogin },
     data(){
        return{
        }
    },
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    }
}
</script>
<style scoped>
</style>