<template>
    <div class="container mb-3">
        <div>
            <p class="fs-4 fw-bold">Checkout</p>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="mb-4">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2 text-black">Personal Information</p>
                        <a class="text-secondary btn btn-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Edit
                        </a>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="">
                                <label for="fname">First Name</label>
                                <input type="text" class="form-control" id="fname">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <label for="lname">Last Name</label>
                                <input type="text" class="form-control" id="lname">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="">
                                <label for="email">Email Address</label>
                                <input type="email" class="form-control" id="email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <label for="pnum">Phone Number</label>
                                <input type="text" class="form-control" id="pnum">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2 text-black">Delivery Address</p>
                        <a class="text-secondary btn btn-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Edit
                        </a>
                    </div>
                    <div class="mb-3">
                        <div class="">
                            <label for="sAddr">Street Address</label>
                            <input type="text" class="form-control" id="sAddr">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="">
                                <label for="city">City</label>
                                <input type="text" class="form-control" id="city">
                            </div>
                        </div>
                        <div class="col-md-4">
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
                    <p class="mb-3 text-black">Payment Method</p>
                    <div class="form-check mb-2">
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
                    </div>
                    <div class="form-check mb-2">
                        <label class="form-check-label text-dark" for="cashradio">
                            Cash
                        </label>
                        <input class="form-check-input"  type="radio" name="cashradio" id="cashradio" value="Cash">
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
    name: "CheckoutRegisteredUser",
    components: { OrderSummaryCheckout },
    data(){
        return{
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