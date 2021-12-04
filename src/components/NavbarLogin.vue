<template>
    <nav class="navbar">
        <div class="container-fluid">
            <div class="nav-item">
                <button class="navbar-toggler" type="button" @click="overlay">
                    <i class="bi bi-justify text-dark"></i>
                </button>
                <SidenavLoggedIn :user="user" :open="openCanvas" @update:parent="openCanvas = $event" />
                <router-link to="/" class="navbar-brand">
                    <img src="@/assets/images/logo.png" alt="Nippyeats logo" :width="desktop ?180:90" :height="desktop ?39:30">
                </router-link>
            </div>
            <div class="nav-item" v-if="desktop">
                <div class="nav-item align-items-baseline" :class="user.deliveryAddresses==null && address == null ?'d-none':'w-50'">
                    <i class="bi bi-geo-alt-fill me-2"></i>
                    <p class="navbar-text mb-0 me-2 text-truncate" v-if="address != ''">{{address}}</p>
                    <p class="navbar-text mb-0 me-2 text-truncate" v-else>{{user.deliveryAddresses}}</p>
                </div>
                <div class="input-group has-icon" v-if="$route.path !='/search'">
                    <span class="form-control-feedback">
                        <i class="bi bi-search text-secondary opacity-25"></i>
                    </span>
                    <input type="text" placeholder="Search food or resturants" class="bg-light form-control rounded searchbar" @click="$router.push('/search')">
                </div>
            </div>
            <div class="nav-item" v-if="desktop">
                <div class="dropdown nav-item" v-if="loggedIn">
                    <button class="btn pb-0 nav-link" type="button" id="notification" data-bs-toggle="dropdown" aria-expanded="false">
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
                    Basket <i class="bi bi-dot"></i> {{basket.length}}
                </router-link>
            </div>
            <NavbarMobileRight v-if="!desktop"/>
        </div>
    </nav>
</template>

<script>
import SidenavLoggedIn from "./SidenavLoggedIn.vue"
import Notifications from "./Notifications.vue"
import NavbarMobileRight from "./NavbarMobileRight.vue"
import {mapGetters} from 'vuex'
import authHeader from '../services/auth-header'
export default{
    inject: ["mq"],
    name: "NavbarLogin",
    data(){
        return{
            user: {},
            openCanvas: false
        }
    },
    components: { SidenavLoggedIn, Notifications, NavbarMobileRight },
    methods:{
        overlay(){
            this.openCanvas = true
            this.$store.commit('activate_overlay', true)
        },
    },
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
        ...mapGetters([
            'basket', 'address'
        ]),
        ...mapGetters('auth',['loggedIn']),
    },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'https://api.nippyeats.com/v1/foodies/',
            headers: authHeader()
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