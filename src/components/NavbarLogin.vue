<template>
    <nav class="navbar">
        <div class="container-fluid">
            <div class="nav-item">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i class="bi bi-justify"></i>
                </button>
                <SidenavLoggedIn :user="user" />
                <router-link to="/home" class="navbar-brand">
                    <img src="@/assets/images/logo.png" alt="Nippyeats logo" :width="desktop ?180:90" :height="desktop ?39:30">
                </router-link>
            </div>
            <div class="nav-item" v-if="desktop">
                <div class="nav-item align-items-baseline w-50">
                    <i class="bi bi-geo-alt-fill me-2"></i>
                    <p class="navbar-text mb-0 me-2 text-truncate">{{user.deliveryAddresses}}</p>
                </div>
                <div class="input-group has-icon">
                    <span class="form-control-feedback">
                        <i class="bi bi-search text-secondary opacity-25"></i>
                    </span>
                    <input type="text" placeholder="Search food or resturants" class="bg-light form-control rounded searchbar">
                </div>
            </div>
            <div class="nav-item" v-if="desktop">
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
            <NavbarMobileRight v-if="!desktop"/>
        </div>
    </nav>
</template>

<script>
import SidenavLoggedIn from "./SidenavLoggedIn.vue";
import Notifications from "./Notifications.vue";
import NavbarMobileRight from "./NavbarMobileRight.vue";
export default{
    inject: ["mq"],
    name: "NavbarLogin",
    data(){
        return{
            user: {}
        }
    },
    components: { SidenavLoggedIn, Notifications, NavbarMobileRight },
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'https://api.nippyeats.com/v1/foodies/',
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('nippy.token')}`,
                'Content-Type': 'application/json'
            }
        };

        this.axios(config)
        .then(response => {
            this.user = response.data.data
        })
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