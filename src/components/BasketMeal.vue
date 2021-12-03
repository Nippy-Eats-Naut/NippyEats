<template>
    <div class="border border-1 rounded border-dark px-2 py-1 mb-5">
        <p class="fw-bold text-center fs-6">Basket</p>
        <div v-if="basket.length == 0" class="--empty w-100">
            <p class="text-secondary">
                <i class="bi bi-basket3 fs-3"></i>
            </p>
            <p class="text-secondary">Nothing here yet</p>
        </div>
        <div v-else>
            <div class="border border-1 border-dark rounded d-flex px-1 py-1 mb-3 position-relative" v-for="meal,index in basket" :key="index">
                <div class="me-1">
                    <button class="btn btn-sm pe-1" @click="removeMenu(meal)">
                        <i class="bi bi-x text-dark"></i>
                    </button>
                </div>
                <div class="me-2">
                    <img :src="meal.img != null ? meal.img : require('@/assets/images/2logo.png')" class="rounded" height="60" width="60">
                </div>
                <div class="me-1">
                    <p class="small mb-1 text-truncate w-75">{{meal.title}}</p>
                    <p class="small text-secondary">{{provider}}</p>
                    <div class="">
                        <div class="input-group">
                            <button class="btn btn-dark btn-sm border-0" @click="meal.quantity--">-</button>
                            <input class="quantity-input" type="text" v-model="meal.quantity">
                            <button class="btn btn-dark btn-sm border-0" @click="meal.quantity++">+</button>
                        </div>
                    </div>
                </div>
                <div class="position-absolute end-0 me-1">
                    <p class="small fw-bold">{{meal.currency}} {{parseFloat(meal.price.toString())}}</p>
                </div>
            </div>

            <p class="h6">Order Summary</p>
            <div class="d-flex justify-content-between">
                <p class="mb-1 text-secondary">Subtotal</p>
                <p class="h6">NGN {{subTotal}}</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="mb-1 text-secondary">Delivery Fee</p>
                <p class="h6">NGN 500</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="h6">Total</p>
                <p class="h6">NGN {{subTotal+500}}</p>
            </div>
            <div>
                <router-link to="/checkout/user" v-if="loggedIn != null" class="btn btn-primary text-white w-100 btn-lg">Proceed To Checkout</router-link>
                <router-link to="/checkout/guest" v-else class="btn btn-primary text-white w-100 btn-lg">Proceed To Checkout</router-link>
            </div>
            
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'BasketMeal',
    methods:{ 
        removeMenu(meal){
            this.$store.commit('REMOVE_menu', meal)
        }
    },
    computed:{
        ...mapGetters([
            'basket', 'provider'
        ]),
        ...mapGetters('auth', ['loggedIn']),
        subTotal(){
            var totalSum = this.basket.reduce(function(res, meal){
                var mp = meal.price;
               return res + (mp * meal.quantity);
           }, 0);
           return totalSum;
       },
    },
}
</script>
<style scoped>
    .quantity-input{
        border: 0px;
        background-color: #212529;
        color: white;
        font-size: small;
        width: 20px;
    }
</style>