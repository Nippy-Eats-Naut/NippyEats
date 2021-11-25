<template>
    <div class="d-flex align-items-center">
        <router-link to="" class="btn pt-0 pe-1 me-3">
            <i class="bi bi-search text-dark"></i>
        </router-link>
        <router-link to="/notification" class="me-3 btn pt-0 pe-1" type="button" id="notification">
            <i class="bi bi-bell-fill text-dark position-relative">
                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New notifications</span>
                </span>
            </i>
        </router-link>
        <router-link to="/basket" class="btn pt-0 pe-1 position-relative" id="basket">
            <i class="bi bi-basket-fill"></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1">
                2
            </span> 
        </router-link>
    </div>
</template>
<script>
export default {
    name: "NavbarMobileRight",
    data() {
        return {
        };
    },
}
</script>