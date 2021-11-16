<template>
    <SidenavLoggedIn :open="Open" @update:parent="Open = $event"/>
    <div class="container">
        <div class="d-flex justify-content-between py-3">
            <div>
                <button class="me-3 btn" @click="OpenSidenav">
                    <i class="bi bi-justify"></i>
                </button>
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="180" height="39">
            </div>
            <div class="d-flex align-items-baseline">
                <div class="d-flex">
                    <i class="bi bi-geo-alt-fill me-2"></i>
                    <p class="mb-0 me-2 location">Wuse, Abuja</p>
                </div>
                <div class="input-group has-icon">
                    <span class="form-control-feedback">
                        <i class="bi bi-search text-secondary"></i>
                    </span>
                    <input type="text" placeholder="Search food or resturants" class="form-control rounded">
                </div>
            </div>
            <div>
                <button class="btn">
                    <i class="bi bi-bell-fill text-dark"></i>
                </button>
                <router-link to="/login" class="btn btn-dark rounded">
                    <i class="bi bi-basket-fill"></i>
                    Basket . 2
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SidenavLoggedIn from "./SidenavLoggedIn.vue";
export default{
    name: "NavbarLogin",
    components: { SidenavLoggedIn },
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
    .input-group{
        align-items: center;
    }
    .location{
        white-space: nowrap;
    }
</style>