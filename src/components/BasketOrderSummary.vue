<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div>
            <!--<p class="text-secondary">Subtotal</p>-->
            <div class="d-flex justify-content-between">
                <p class="text-dark">Subtotal</p>
                <p class="text-dark">{{subTotal}}</p>
            </div>
            <!--<div class="d-flex justify-content-between" v-for="proivder,index in getProvider" :key="index">
                <p class="text-secondary mb-2">{{provider.name}}</p>
                <p class="text-dark mb-2">{{provider.total}}</p>
            </div>-->
        </div>
        <hr>
        <div class="mb-5">
            <div class="d-flex justify-content-between">
                <p class="text-dark">Delivery fee</p>
                <p class="text-dark">N1,000</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="text-dark">VAT</p>
                <p class="text-dark">N500</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="text-dark">Total</p>
                <p class="text-dark">{{subTotal + 1500}}</p>
            </div>
        </div>
        <div>
            <router-link to="/checkout/user" v-if="id != null" class="btn bg--orange text-white w-100 btn-lg">Proceed To Checkout</router-link>
            <router-link to="/checkout/guest" v-else class="btn bg--orange text-white w-100 btn-lg">Proceed To Checkout</router-link>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'BasketOrderSummary',
    data(){
        return{
            id: localStorage.getItem('nippy.token')
        }
    },
    computed: {
        ...mapGetters([
            'basket', 'provider'
        ]),
        subTotal(){
            var totalSum = this.basket.reduce(function(res, meal){
                var mp = meal.value.price;
               return res + (mp * meal.quantity);
           }, 0);
           return totalSum;
        }
    }
}
</script>