<template>
    <div class="container mb-3">
        <div>
            <p class="fs-4 fw-bold">Checkout</p>
        </div>
        <div class="row">
            <div class="col-md-8 mb-3">
                <div class="mb-4">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2 text-dark h6">Personal Information</p>
                        <a class="text-secondary btn btn-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Edit
                        </a>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 mb-3">
                            <div class="">
                                <label for="fname">First Name</label>
                                <input type="text" class="form-control" id="fname" v-model="user.firstName">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <label for="lname">Last Name</label>
                                <input type="text" class="form-control" id="lname" v-model="user.lastName">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 mb-3">
                            <div class="">
                                <label for="email">Email Address</label>
                                <input type="email" class="form-control" id="email" v-model="user.email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <label for="pnum">Phone Number</label>
                                <input type="text" class="form-control" id="pnum" v-model="user.phone">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4" v-if="deliveryMode == 'Delivery'">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2 text-dark h6">Delivery Address</p>
                        <a class="text-secondary btn btn-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Edit
                        </a>
                    </div>
                    <div class="mb-3">
                        <div class="">
                            <label for="sAddr">Street Address</label>
                            <input type="text" class="form-control" id="sAddr" v-model="user.deliveryAddresses">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="">
                                <label for="city">City</label>
                                <input type="text" class="form-control" id="city">
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="">
                                <label for="state">State</label>
                                <input type="text" class="form-control" id="state">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="">
                                <label for="postcode">Postal Code</label>
                                <input type="text" class="form-control" id="postcode">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="mb-3 text-dark h6">Payment Method</p>
                    <div class="d-flex">
                        <div class="px-3 border py-2 rounded form-check w-100 me-2" :class="data.payMethod == 'Flutterwave'? 'border-primary' : ''">
                            <label class="form-check-label" for="flutterradio">
                                <img src="@/assets/images/flutterwave.svg" alt="" width="16" height="16" class="me-1">
                                Flutterwave
                            </label>
                            <input class="form-check-input d-none"  type="radio" name="flutterradio" id="flutterradio" value="Flutterwave" v-model="data.payMethod">
                        </div>
                        <div class="px-3 border py-2 rounded form-check w-100 ms-2" :class="data.payMethod == 'Wallet'? 'border-primary' : ''">
                            <label class="form-check-label" for="foodieradio">
                                <router-link to="/wallet">Foodie Wallet</router-link>
                            </label>
                            <input class="form-check-input d-none"  type="radio" name="foodieradio" id="foodieradio" value="Wallet" v-model="data.payMethod">
                        </div>
                    </div>

                    <!-- <div class="form-check mb-2">
                        <label class="form-check-label text-dark" for="cardradio">
                            <i class="bi bi-credit-card-2-front me-1"></i>
                            **** **** 2456
                        </label>
                        <input class="form-check-input"  type="radio" name="cardradio" id="cardradio" value="Card">
                    </div>
                    <div class="form-check mb-2">
                        <label class="form-check-label text-dark" for="walletradio">
                            Foodie Wallet(N3,000)
                        </label>
                        <input class="form-check-input"  type="radio" name="walletradio" id="walletradio" value="Wallet">
                    </div> -->
                </div>
            </div>
            <div class="col-md-4">
                <OrderSummaryCheckout />
            </div>
        </div>
    </div>
</template>
<script>
import OrderSummaryCheckout from "@/components/OrderSummaryCheckout.vue";
import authHeader from '../services/auth-header';
import {mapGetters} from 'vuex'
export default {
    name: "CheckoutRegisteredUser",
    components: { OrderSummaryCheckout },
    data(){
        return{
            user: {},
            data: []
        }
    },
    computed:{
        ...mapGetters(['deliveryMode'])
    },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'https://api.nippyeats.com/v1/foodies/',
            headers: authHeader()
        };

        this.axios(config)
        .then(response => {
            this.user = response.data.data
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}
</script>
<style scoped>
    label{
        --bs-text-opacity: 1;
        color: rgba(var(--bs-secondary-rgb),var(--bs-text-opacity));
    }
</style>