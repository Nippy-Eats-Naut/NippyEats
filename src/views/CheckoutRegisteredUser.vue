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
                        <!-- <a class="text-secondary btn btn-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Edit
                        </a> -->
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 mb-3">
                            <div class="">
                                <label for="fname">First Name</label>
                                <input type="text" class="form-control" id="fname" v-model="data.user.firstName">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <label for="lname">Last Name</label>
                                <input type="text" class="form-control" id="lname" v-model="data.user.lastName">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 mb-3">
                            <div class="">
                                <label for="email">Email Address</label>
                                <input type="email" class="form-control" id="email" v-model="data.user.email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <label for="pnum">Phone Number</label>
                                <input type="text" class="form-control" id="pnum" v-model="data.user.phone">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4" v-if="deliveryMode == 'Delivery'">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2 text-dark h6">Delivery Address</p>
                        <!-- <a class="text-secondary btn btn-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Edit
                        </a> -->
                    </div>
                    <div class="mb-3">
                        <div class="">
                            <label for="sAddr">Street Address</label>
                            <GMapAutocomplete
                                placeholder="Where are you at?"
                                @place_changed="Location"
                                class="form-control"
                                id="sAddr"
                                
                            >
                            </GMapAutocomplete>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="">
                                <label for="city">City</label>
                                <input type="text" class="form-control" id="city"  v-model="data.currentPlace.location.city">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a note here" id="delivery_note" v-model="data.note"></textarea>
                                <label for="delivery_note">Delivery note</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="mb-3 text-dark h6">Payment Method</p>
                    <div class="d-flex">
                        <div class="px-3 border py-2 rounded form-check w-100 me-2" :class="data.payMethod == 'pay_now'? 'border-primary' : ''">
                            <label class="form-check-label" for="flutterradio">
                                <img src="@/assets/images/flutterwave.svg" alt="" width="16" height="16" class="me-1">
                                Pay now (Flutterwave)
                            </label>
                            <input class="form-check-input d-none"  type="radio" name="flutterradio" id="flutterradio" value="pay_now" v-model="data.payMethod">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <OrderSummaryCheckout :data="data"  />
            </div>
        </div>
        <Alert :message="$store.state.message" category="alert" :success="$store.state.success" :link="false" />
    </div>
</template>
<script>
import OrderSummaryCheckout from "@/components/OrderSummaryCheckout.vue";
import authHeader from '../services/auth-header';
import {mapGetters} from 'vuex'
import Alert from "../components/Alert.vue";
export default {
    name: "CheckoutRegisteredUser",
    components: { OrderSummaryCheckout, Alert },
    data(){
        return{
            data: {   
                user: {},
                payMethod: '',
                currentPlace: {
                    street: "",
                    location: {}
                }
            }
        }
    },
    methods:{
        Location(place){
            this.data.currentPlace.street = place.formatted_address;
        }
    },
    computed:{
        ...mapGetters(['deliveryMode', 'basket'])
    },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'https://api.nippyeats.com/v1/foodies/',
            headers: authHeader()
        };

        this.axios(config)
        .then(response => {
            this.data.user = response.data.data
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