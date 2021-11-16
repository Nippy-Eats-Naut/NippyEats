<template>
    <SidenavNoLogin  :open="Open" @update:parent="Open = $event"/>
    <div class="container">
        <div class="d-flex justify-content-between py-3">
            <div>
                <button class="me-3 btn" @click="OpenSidenav">
                    <i class="bi bi-justify"></i>
                </button>
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="180" height="39">
            </div>
            <div>
                <router-link to="/login" class="btn bg--orange text-white">
                    Login/Sign Up
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import SidenavNoLogin from "./SidenavNoLogin.vue";
export default{
    name: "NavbarNoLogin",
    components: { SidenavNoLogin },
     data(){
        return{
            Open: false
        }
    },
    methods:{
        OpenSidenav(){
            this.Open = true;
        },
    }
}
</script>
<style scoped>
</style>