<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div  v-for="meal,index in basket" :key="index" class="mb-3">
            <div class="row mb-2">
                <div class="col-md-3 col-3">
                    <img :src="meal.value.img.fileUrl" alt="" class="rounded auto-img">
                </div>
                <div class="col-md-5 col-5">
                    <p class="mb-1">{{meal.value.title}}</p>
                    <p class="text-secondary small mb-1">{{meal.provider}}</p>
                    <div class="d-flex">
                        <p class="text-secondary small mb-0 me-2">{{meal.quantity}} plate</p> 
                    </div>
                </div>
                <div class="col-md-4 col-4">
                    <p class="text-dark fw-bold">{{meal.value.currency}} {{parseFloat(meal.value.price.toString())}}</p>
                    <div class="input-group" v-show="edit == true">
                        <button class="btn btn-dark btn-sm border-0" @click="meal.quantity--">-</button>
                        <input class="quantity-input w-25" type="text" v-model="meal.quantity">
                        <button class="btn btn-dark btn-sm border-0" @click="meal.quantity++">+</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-6">
                    <a class="text--orange btn" @click="edit = !edit">Edit</a>
                </div>
                <div class="col-md-6 col-6 d-flex justify-content-end">
                    <a class="text--orange btn" @click="removeMenu(meal)">Remove</a>
                </div>
            </div>
        </div><hr>
        <div>
            <div class="input-group border border-secondary rounded-3 d-flex justify-content-between align-items-center mb-3">
                <div class="form-floating">
                    <input type="text" class="form-control border-0" id="floatingInput" placeholder="discount code">
                    <label for="floatingInput">Discount Code</label>
                </div>
                <a class="text--orange btn text text-decoration-underline">Apply</a>
            </div>
            <div>
                <div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">Subtotal</p>
                        <p class="h6 mb-1">{{subTotal}}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">Delivery fee</p>
                        <p class="h6 mb-1">N2,000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">VAT</p>
                        <p class="h6 mb-1">N500</p>
                    </div>
                    <div class="d-flex justify-content-between mt-1 mb-2">
                        <p class="text-dark mb-1">Total</p>
                        <p class="h6 mb-1">{{subTotal + 2500}}</p>
                    </div>
                </div>
                <button class="btn btn-primary btn-lg w-100">Proceed To Payment</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'OrderSummaryCheckout',
    data(){
        return{
            edit: false
        }
    },
    methods:{
        removeMenu(meal){
            this.$store.commit('REMOVE_menu', meal)
        }
    },
    computed: {
        ...mapGetters([
            'basket',
        ]),
        subTotal(){
            var totalSum = this.basket.reduce(function(res, meal){
                var mp = meal.value.price;
               return res + (mp * meal.quantity);
           }, 0);
           return totalSum;
       },
    },
}
</script>