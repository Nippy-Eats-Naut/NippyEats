<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div  v-for="meal,index in basket" :key="index" class="mb-3 --shadow">
            <div class="row mb-2">
                <div class="col-md-3 col-3">
                    <img :src="meal.img != null ? meal.img : require('@/assets/images/2logo.png')" alt="" class="rounded auto-img">
                </div>
                <div class="col-md-5 col-5">
                    <p class="mb-1 text-truncate">{{meal.title}}</p>
                    <p class="text-secondary small mb-1 text-truncate">{{meal.provider}}</p>
                    <div class="d-flex">
                        <p class="text-secondary small mb-0 me-2">{{meal.quantity}} plate</p> 
                    </div>
                </div>
                <div class="col-md-4 col-4">
                    <p class="text-dark fw-bold">{{meal.currency}} {{parseFloat(meal.price.toString())}}</p>
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
                        <p class="h6 mb-1">₦{{subTotal}}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">Delivery fee</p>
                        <p class="h6 mb-1">₦{{deliveryFee}}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">VAT</p>
                        <p class="h6 mb-1">₦</p>
                    </div>
                    <div class="d-flex justify-content-between mt-1 mb-2">
                        <p class="text-dark mb-1">Total</p>
                        <p class="h6 mb-1">₦{{(subTotal + deliveryFee).toFixed(2)}}</p>
                    </div>
                    <button class="btn btn-primary btn-lg w-100" @click="placeOrders" :disabled="loading">
                        <span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                            role="status" aria-hidden="true"
                            ></span>
                            <span v-show="loading == false">Proceed To Payment</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppService from "../services/app.service"
import {mapGetters} from 'vuex'
export default {
    name: 'OrderSummaryCheckout',
    props: {
        data: {type: Object}
    },
    data(){
        return{
            loading: false,
            edit: false
        }
    },
    methods:{
        removeMenu(meal){
            this.$store.commit('REMOVE_menu', meal)
        },
        
        placeOrders(){
            if(this.loggedIn){
                if(!this.data.payMethod || !this.data.currentPlace.street || !this.data.currentPlace.location.state ||
                    !this.data.currentPlace.location.city || !this.data.currentPlace.location.postalcode
                ){
                    var msg = "Field cannot be empty";
                    var succ = false;
                    this.$store.commit('add_alerts', {msg,succ})
                }
                else{
                    this.loading = true

                    var sortedOrders = []
                    this.basket.map(item => {
                        let found = sortedOrders.find(value => value.providerId == item.providerId);
                        
                        if (!found) {
                            sortedOrders.push({
                                providerId: item.providerId,
                                deliveryMode: item.deliveryMode,
                                paymentMode: this.data.payMethod,
                                address: this.data.currentPlace,
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
                    
                    console.log(sortedOrders)

                    sortedOrders.forEach(menu => {
                        AppService.createOrders(menu)
                        .then(response => {
                            let msg = response.data.message
                            let succ = response.data.success
                            this.$store.commit('add_alerts', {msg,succ})
                        })
                        .catch(error => {
                            let msg = error.response.data.message
                            let succ = error.response.data.success
                            this.$store.commit('add_alerts', {msg,succ})
                        });
                    })
                    this.loading = false
                }
            }
            else{
                this.$router.push('/login')
            }
        }
    },
    computed: {
        ...mapGetters([
            'basket', 'currentPlace'
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
    },
}
</script>
<style scoped>
    
    .--shadow:hover {
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    }
</style>