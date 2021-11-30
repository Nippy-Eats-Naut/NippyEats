<template>
    <div class="offcanvas offcanvas-start" tabindex="-1"  :class="open == true? 'show visible':'invisible'">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn-close text-reset" @click="handleClick" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body position-relative">   
            <div class="d-flex justify-content-center mb-3">
                <img src="#" alt="" class="me-3" width="" height="">
                <div>
                    <p class="fw-bold fs-4 mb-1">{{user.firstName}} {{user.lastName}}</p>
                    <div class="d-flex align-items-baseline" :class="user.deliveryAddresses==null?'d-none':'w-50'">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        <p class="navbar-text mb-0 me-2 text-truncate">{{user.deliveryAddresses}}</p>
                    </div>
                    <router-link class="text--orange" to="/account-settings">Account Settings</router-link>
                </div>
            </div>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" :class="desktop?'ps-5':'ps-3'">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link" @click="handleClick">
                        <i class="bi bi-columns-gap me-3"></i>
                        <p class="mb-0">Home</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/orders" class="nav-link" @click="handleClick">
                        <i class="bi bi-journal-check me-3"></i>
                        <p class="mb-0">My Order</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/favourites" class="nav-link" @click="handleClick">
                        <i class="bi bi-heart me-3"></i>
                        <p class="mb-0">Favourites</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/wallet" class="nav-link" @click="handleClick">
                        <i class="bi bi-wallet me-3"></i>
                        <p class="mb-0">Wallet</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/invite-friends" class="nav-link" @click="handleClick">
                        <i class="bi bi-gift me-3"></i>
                        <p class="mb-0">Invites Friends</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="Logout">
                        <i class="bi bi-box-arrow-right me-3"></i>
                        <p class="mb-0">Log Out</p>
                    </a>
                </li>
            </ul>
            <div class="position-absolute bottom-0">
                <div class="row">
                    <img src="@/assets/images/logo.png" alt="Nippyeats logo" class="auto-img">
                </div>
                <div class="row my-3">
                    <a href="" class="col-md-6 col-6">
                        <img src="@/assets/images/google.png" alt="Get on google play" class="auto-img">
                    </a>
                    <a href="" class="col-md-6 col-6">
                        <img src="@/assets/images/apple.png" alt="Get on apple store" class="auto-img">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <Logout  :mOpen="openModal" @update:parent="openModal = $event"/>
</template>
<script>
import Logout from "./Logout.vue"
export default {
    name: "SidenavLoggedIn",
    inject: ["mq"],
    props: {
        user: {
            type: Object,
        },
        open: {
            type: Boolean
        }
    },
    data(){
        return{
            fooOpen: false,
            openModal: false
        }
    },
    components: { Logout },
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
    methods: {
        handleClick(){
            this.$emit("update:parent", this.fooOpen);
            this.$store.commit('activate_overlay', false)
        },
        Logout(){
            this.$emit("update:parent", this.fooOpen);
            //this.$store.commit('activate_overlay', false)
            this.openModal = true
        }
    }
}
</script>
<style scoped>
    .nav-item .nav-link{
        display: flex;
        color: #000000;
    }
</style>