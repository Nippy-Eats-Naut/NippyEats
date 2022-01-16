<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div>
            <!--<p class="text-secondary">Subtotal</p>-->
            <div class="d-flex justify-content-between">
                <p class="text-dark">Subtotal</p>
                <p class="text-dark">₦{{subTotal}}</p>
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
                <p class="text-dark">₦{{deliveryFee}}</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="text-dark">VAT</p>
                <p class="text-dark">₦</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="text-dark">Total</p>
                <p class="text-dark">₦{{(subTotal + deliveryFee).toFixed(2)}}</p>
            </div>
        </div>
        <div>
            <router-link to="/checkout/user" v-if="loggedIn != null" class="btn btn-primary text-white w-100 btn-lg">Proceed To Checkout</router-link>
            <router-link to="/checkout/guest" v-else class="btn btn-primary text-white w-100 btn-lg">Proceed To Checkout</router-link>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import AppService from "../services/app.service"
export default {
    name: 'BasketOrderSummary',
    computed: {
        ...mapGetters([
            'basket', 'provider', 'currentPlace'
        ]),

        ...mapGetters('auth', ['loggedIn']),

        subTotal(){
            var totalSum = this.basket.reduce(function(res, meal){
                var mp = meal.price;
               return res + (mp * meal.quantity);
           }, 0);
           return totalSum;
        },

        deliveryFee(){
            var delivery = []
            this.basket.map(item => {
                let found = delivery.find(value => value.providerId == item.providerId);
                
                if (!found) {
                    delivery.push({
                        providerId: item.providerId,
                        longitude: item.longitude,
                        latitude: item.latitude,
                        menus: [
                            {
                                menuId: item.id,
                                quantity: item.quantity
                            }
                        ]
                    })
                }
                else{
                    found.menus.push(
                        {
                            menuId: item.id,
                            quantity: item.quantity
                        }
                    )
                }
            });

            const mk1 = {
                longitude: this.currentPlace.longitude,
                latitude: this.currentPlace.latitude
            }
            var totalDelivery = delivery.reduce(function(res, meal){
                const mk2 = {
                    longitude: meal.longitude,
                    latitude: meal.latitude
                }

                return res+ AppService.deliveryFee(mk1, mk2);
           }, 0);
           return totalDelivery;
        }
    }
}
</script>