<template>
    <div class="container mb-3">
        <div>
            <p class="fs-4 fw-bold">Checkout</p>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="mb-4">
                    <p class="mb-2 text-dark h6">Personal Information</p>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="fname" placeholder="name@example.com" v-model="firstName">
                                <label for="fname">First Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="lname" placeholder="name@example.com" v-model="lastName">
                                <label for="lname">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
                                <label for="email">Email Address</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="pnum" placeholder="name@example.com" v-model="phone">
                                <label for="pnum">Phone Number</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <p class="mb-2 text-dark h6">Delivery Address</p>
                    <div class="mb-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="sAddr" placeholder="name@example.com" v-model="deliveryAddress">
                            <label for="sAddr">Street Address</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="city" placeholder="name@example.com">
                                <label for="city">City</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="state" placeholder="name@example.com">
                                <label for="state">State</label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="postcode" placeholder="name@example.com">
                                <label for="postcode">Postal Code</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="mb-2 text-dark h6">Payment Method</p>
                    <div class="mb-3">
                        <div class="px-3 border py-2 rounded form-check d-flex justify-content-between" :class="payMethod == 'Flutterwave'? 'border-primary' : ''">
                            <label class="form-check-label" for="flutterradio">
                                <img src="@/assets/images/flutterwave.svg" alt="" width="16" height="16" class="me-1">
                                Flutterwave
                            </label>
                            <input class="form-check-input"  type="radio" name="flutterradio" id="flutterradio" value="Flutterwave" v-model="payMethod">
                        </div>
                    </div>
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
export default {
    name: "CheckoutGuest",
    components: { OrderSummaryCheckout },
    data(){
        return{
            data: {
                firstName:'',
                lastName:'',
                email:'',
                phone:'',
                deliveryAddress:'',
                payMethod: ''
            }
        }
    }
}
</script>
<style scoped>
    label{
        --bs-text-opacity: 1;
        color: rgba(var(--bs-secondary-rgb),var(--bs-text-opacity));
    }
</style>