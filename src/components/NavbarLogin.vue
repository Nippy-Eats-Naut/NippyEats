<template>
    <!--<SidenavLoggedIn :open="Open" @update:parent="Open = $event"/>-->
    <nav class="navbar">
        <div class="container-fluid">
            <div class="nav-item">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i class="bi bi-justify"></i>
                </button>
                <SidenavLoggedIn />
                <router-link to="/home" class="navbar-brand">
                    <img src="@/assets/images/logo.png" alt="Nippyeats logo" :width="desktop ?180:90" :height="desktop ?39:30">
                </router-link>
            </div>
            <div class="nav-item">
                <div class="nav-item align-items-baseline">
                    <i class="bi bi-geo-alt-fill me-2"></i>
                    <p class="navbar-text mb-0 me-2 text-nowrap">Wuse, Abuja</p>
                </div>
                <div class="input-group has-icon">
                    <span class="form-control-feedback">
                        <i class="bi bi-search text-secondary opacity-25"></i>
                    </span>
                    <input type="text" placeholder="Search food or resturants" class="bg-light form-control rounded searchbar">
                </div>
            </div>
            <div class="nav-item">
                <div class="dropdown nav-item" >
                    <button class="btn nav-link" type="button" id="notification" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-bell-fill position-relative text-dark">
                            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">New notifications</span>
                            </span>
                        </i>
                    </button>
                    <Notifications />
                </div>
                <router-link to="/basket" class="btn btn-dark rounded">
                    <i class="bi bi-basket-fill me-1"></i>
                    Basket <i class="bi bi-dot"></i> 2
                </router-link>
            </div>



            <!--<div class="d-flex justify-content-between py-3">
                <div class="d-flex">
                    <button class="me-3 btn" @click="OpenSidenav" :class="desktop ? '' : 'pt-0 pe-1'">
                        <i class="bi bi-justify"></i>
                    </button>
                    <router-link to="/home" class="navbar-brand">
                        <img src="@/assets/images/logo.png" alt="Nippyeats logo" :width="desktop ?180:90" :height="desktop ?39:30">
                    </router-link>
                </div>
                <div class="d-flex align-items-baseline" v-if="desktop">
                    <div class="d-flex">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        <p class="mb-0 me-2 text-nowrap">Wuse, Abuja</p>
                    </div>
                    <div class="input-group has-icon">
                        <span class="form-control-feedback">
                            <i class="bi bi-search text-secondary opacity-25"></i>
                        </span>
                        <input type="text" placeholder="Search food or resturants" class="bg-light form-control rounded searchbar">
                    </div>
                </div>
                <div class="d-flex align-items-baseline" v-if="desktop">
                    <div class="dropdown me-3" >
                        <button class="btn p-0 position-relative" type="button" id="notification" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                            <i class="bi bi-bell-fill text-dark"></i>
                            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">New notifications</span>
                            </span>
                        </button>
                        <Notifications />
                    </div>
                    <router-link to="/basket" class="btn btn-dark rounded">
                        <i class="bi bi-basket-fill"></i>
                        Basket <i class="bi bi-dot"></i> 2
                    </router-link>
                </div>
                <NavbarMobileRight v-if="!desktop"/>
            </div>-->
        </div>
    </nav>
</template>

<script>
import SidenavLoggedIn from "./SidenavLoggedIn.vue";
import Notifications from "./Notifications.vue";
//import NavbarMobileRight from "./NavbarMobileRight.vue";
export default{
    inject: ["mq"],
    name: "NavbarLogin",
    components: { SidenavLoggedIn, Notifications,},// NavbarMobileRight },
    /*data(){
        return{
            Open: false,
        }
    },
    methods:{
        OpenSidenav(){
            this.Open = true;
        },
    },*/
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    }
}
</script>
<style scoped>
    .input-group{
        align-items: center;
    }
    .nav-item{
        display: flex;
    }
</style>