<template>
    <div class="d-flex align-items-center">
        <router-link to="" class="btn pt-0 pe-1 me-3">
            <i class="bi bi-search text-dark"></i>
        </router-link>
        <button class=" me-3 btn pt-0 pe-1 position-relative" type="button" id="notification" @click="handleClick">
            <i class="bi bi-bell-fill text-dark"></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New notifications</span>
            </span>
        </button>
        <router-link to="/basket" class="btn pt-0 pe-1 position-relative" id="basket">
            <i class="bi bi-basket-fill"></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1">
                2
            </span> 
        </router-link>
        <MobileNotification :open="Open" @update:parent="Open = $event"/>
    </div>
</template>
<script>
import MobileNotification from "./MobileNotification.vue";
export default {
    name: "NavbarMobileRight",
    data() {
        return {
            Open: false,
        };
    },
    methods: {
        handleClick() {
            this.Open = true;
        },
    },
    components: { MobileNotification }
}
</script>