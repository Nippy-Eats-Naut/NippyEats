<template>
    <div class="container mt-3">
        <div>
            <p class="fs-5 fw-bold mb-2">Your Basket</p>
            <p>3 Items</p>
        </div>
        <div class="row">
            <div class="col-md-9">
                <div class="my-5">
                    <p class>Jevenik Resturant</p>
                    <YourBasket :meals="meals.slice(0,2)"/>
                </div>
                <div>
                    <p class>Amala360</p>
                    <YourBasket :meals="meals.slice(0,1)"/>
                </div>
                <div>
                    <button class="btn text--orange">
                        <i class="bi bi-arrow-left"></i>
                        Continue Shopping
                    </button>
                </div>
            </div>
            <div class="col-md-3">
                <BasketOrderSummary />
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
    },
    components: { BasketOrderSummary, YourBasket }
}
</script>