<template>
    <SidenavNoLogin  :open="Open" @update:parent="Open = $event"/>
    <div class="container">
        <div class="d-flex justify-content-between py-3">
            <div>
                <button class="me-3 btn" @click="OpenSidenav" v-if="desktop">
                    <i class="bi bi-justify"></i>
                </button>
                <img src="@/assets/images/logo.svg" alt="Nippyeats logo" :width="desktop ?180:90" :height="desktop ?39:30">
            </div>
            <div>
                <router-link to="/login" class="btn bg--orange text-white">
                    <i class="bi bi-person" v-if="!desktop"></i>Login/Sign Up
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import SidenavNoLogin from "./SidenavNoLogin.vue";
export default{
    name: "NavbarNoLogin",
    inject: ["mq"],
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