<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body position-relative">   
            <div class="d-flex justify-content-center mb-3">
                <img src="#" alt="" class="me-3" width="" height="">
                <div>
                    <p class="fw-bold fs-4 mb-1">{{user.firstName}} {{user.lastName}}</p>
                    <div class="d-flex align-items-baseline w-50">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        <p class="navbar-text mb-0 me-2 text-truncate">{{user.deliveryAddresses}}</p>
                    </div>
                    <router-link class="text--orange" to="/account-settings">Account Settings</router-link>
                </div>
            </div>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" :class="desktop?'ps-5':'ps-3'">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">
                        <i class="bi bi-columns-gap me-3"></i>
                        <p class="mb-0">Home</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/orders" class="nav-link">
                        <i class="bi bi-journal-check me-3"></i>
                        <p class="mb-0">My Order</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/favourites" class="nav-link">
                        <i class="bi bi-heart me-3"></i>
                        <p class="mb-0">Favourites</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/wallet" class="nav-link">
                        <i class="bi bi-wallet me-3"></i>
                        <p class="mb-0">Wallet</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/invite-friends" class="nav-link">
                        <i class="bi bi-gift me-3"></i>
                        <p class="mb-0">Invites Friends</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#Logout">
                        <i class="bi bi-box-arrow-right me-3"></i>
                        <p class="mb-0">Log Out</p>
                    </a>
                </li>
            </ul>
            <div class="position-absolute bottom-0 ps-5">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="230" height="50">
                <div class="d-flex my-3">
                    <a href="" class="me-3">
                        <img src="@/assets/images/google.png" alt="Get on google play" width="100" height="30">
                    </a>
                    <a href="">
                        <img src="@/assets/images/apple.png" alt="Get on apple store" width="100" height="30">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <Logout />
</template>
<script>
import Logout from "./Logout.vue"
export default {
    name: "SidenavLoggedIn",
    inject: ["mq"],
    props: {
        user: {
            type: Object,
        }
    },
    components: { Logout },
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
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