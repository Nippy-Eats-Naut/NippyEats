<template>
    <div class="d-grid justify-items-center align-items-center my-5" :class="desktop?'px--16':''">
        <div class="mb-3">
            <img src="@/assets/images/success.png" class="rounded" height="106">           
        </div>
        <div class="mb-3">
            <p class="mb-0 fs-4 text-dark fw-bold">Order Sucessful!</p>
        </div>
        <div class="mb-4 d-flex justify-content-center">
            <p class="mb-0 text-secondary text-center w-75">Your order has been processed  successfully. Your food will arrive in 30 Minutes!</p>
        </div>
        <div class="mb-2">
            <router-link class="text-white btn-primary btn" to="/trackorders">Track Order</router-link>
        </div>
        <div class="">
            <router-link class="text--orange btn" to="/orders">Edit Order</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderSuccess',
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
    }
}
</script>