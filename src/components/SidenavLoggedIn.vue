<template>
    <div v-show="open == true" class="--sidenav px-3 py-3">
        <div class="d-flex mb-3 justify-content-end">
            <button class="btn" @click="handleClick">
                <i class="bi bi-x fs-5"></i>
            </button>
        </div>
        <div class="d-flex justify-content-center mb-5">
            <img src="#" alt="" class="me-3" width="" height="">
            <div>
                <p class="fw-bold fs-4 mb-1">John Doe</p>
                <p class="text--orange">Account Settings</p>
            </div>
        </div>
        <div>
            <ul>
                <li class="mb-3">
                    <router-link to="/home" class="d-flex">
                        <i class="bi bi-columns-gap me-3"></i>
                        <p class="mb-0">Home</p>
                    </router-link>
                </li>
                <li class="mb-3">
                    <router-link to="/order" class="d-flex">
                        <i class="bi bi-journal-check me-3"></i>
                        <p class="mb-0">My Order</p>
                    </router-link>
                </li>
                <li class="mb-3">
                    <router-link to="/favourites" class="d-flex">
                        <i class="bi bi-heart me-3"></i>
                        <p class="mb-0">Favourites</p>
                    </router-link>
                </li>
                <li class="mb-3">
                    <router-link to="/wallet" class="d-flex">
                        <i class="bi bi-wallet me-3"></i>
                        <p class="mb-0">Wallet</p>
                    </router-link>
                </li>
                <li class="mb-3">
                    <router-link to="/invite-friends" class="d-flex">
                        <i class="bi bi-gift me-3"></i>
                        <p class="mb-0">Invites Friends</p>
                    </router-link>
                </li>
                <li class="mb-3">
                    <a class="d-flex" data-bs-toggle="modal" data-bs-target="#Logout">
                        <i class="bi bi-box-arrow-right me-3"></i>
                        <p class="mb-0">Log Out</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mt-5">
            <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="230" height="50">
            <div class="d-flex mt-3">
                <a href="" class="me-3">
                    <img src="@/assets/images/google.png" alt="Get on google play" width="100" height="30">
                </a>
                <a href="">
                    <img src="@/assets/images/apple.png" alt="Get on apple store" width="100" height="30">
                </a>
            </div>
        </div>
    </div>
    <Logout />
</template>
<script>
import Logout from "./Logout.vue"
export default {
    name: "SidenavLoggedIn",
    props: {
        open: {
            type: Boolean,
        }
    },
    data() {
        return {
            fooOpen: false
        };
    },
    methods: {
        handleClick() {
            this.$emit("update:parent", this.fooOpen);
        }
    },
    components: { Logout }
}
</script>
<style scoped>
    .--sidenav {
        height: 100%;
        width: 300px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        transition: 0.5s;
        overflow-y: scroll;
    }
</style>