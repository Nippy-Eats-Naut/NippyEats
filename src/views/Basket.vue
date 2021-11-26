<template>
    <div class="container mt-3 mb-5">
        <div>
            <p class="h1 mb-2">Your Basket</p>
            <p class="fs-5">{{basket.length}} Items</p>
        </div>
        <div v-if="basket.length == 0" class="--empty w-100">
            <p class="text-secondary">
                <i class="bi bi-basket3 fs-3"></i>
            </p>
            <p class="text-secondary">Nothing here yet</p>
            <router-link to="/home" class="btn text--orange cs">
                <i class="bi bi-arrow-left"></i>
                Continue Shopping
            </router-link>
        </div>
        <div class="row" v-else>
            <div class="col-md-9">
                <div class="my-5" :class="desktop?'my-5': 'mb-5 mt-2'">
                    <YourBasket />
                </div>
                <!--<div>
                    <YourBasket />
                </div>-->
                <div v-if="desktop">
                    <router-link to="/home" class="btn text--orange cs">
                        <i class="bi bi-arrow-left"></i>
                        Continue Shopping
                    </router-link>
                </div>
            </div>
            <div class="col-md-3">
                <BasketOrderSummary />
            </div>
            <div v-if="!desktop" class="mt-3">
                <router-link to="/home" class="btn text--orange cs">
                    <i class="bi bi-arrow-left"></i>
                    Continue Shopping
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import BasketOrderSummary from '../components/BasketOrderSummary.vue';
import YourBasket from '../components/YourBasket.vue';
import {mapGetters} from 'vuex'
export default {
    name: "Basket",
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
        ...mapGetters([
            'basket',
        ]),
    },
    components: { BasketOrderSummary, YourBasket },
    inject: ["mq"],
}
</script>
<style scoped>
    .btn.cs{
        font-size: 20px;
        font-weight: 600;
    }
</style>