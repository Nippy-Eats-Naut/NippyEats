<template>
    <div class="container mt-3 mb-5">
        <div>
            <p class="h1 mb-2">Your Basket</p>
            <p class="fs-5">3 Items</p>
        </div>
        <div class="row">
            <div class="col-md-9">
                <div class="my-5" :class="desktop?'my-5': 'mb-5 mt-2'">
                    <YourBasket :meals="meals.slice(0,2)"/>
                </div>
                <div>
                    <YourBasket :meals="meals.slice(0,1)"/>
                </div>
                <div v-if="desktop">
                    <button class="btn text--orange cs">
                        <i class="bi bi-arrow-left"></i>
                        Continue Shopping
                    </button>
                </div>
            </div>
            <div class="col-md-3">
                <BasketOrderSummary />
            </div>
            <div v-if="!desktop" class="mt-3">
                <button class="btn text--orange cs">
                    <i class="bi bi-arrow-left"></i>
                    Continue Shopping
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import data from '@/assets/db.json'
import BasketOrderSummary from '../components/BasketOrderSummary.vue';
import YourBasket from '../components/YourBasket.vue';
export default {
    name: "Basket",
    computed: {
        meals() {
            return data[0].meals;
        },
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
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