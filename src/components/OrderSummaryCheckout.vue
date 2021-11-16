<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div v-for="n, index in 2" :key="index">
            <div class="d-flex justify-content-between">
                <div>
                    <img src="@/assets/images/dummyImg/Rectangle_24.png" alt="" height="96" class="rounded">
                    <div class="ms-3">
                        <p class="mb-1">Red Velvet Pancake</p>
                        <p class="text-secondary small mb-2">Jelivinik Resturant</p>
                        <p class="text-secondary small">1 plate</p>
                    </div>
                </div>
                <div>
                    <p class="text-dark fw-bold">N3,000</p>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <a class="text--orange btn">Edit</a>
                <a class="text--orange btn">Remove</a>
            </div>
        </div><hr>
        <div>
            <div>

            </div>
            <div>
                <div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary">Subtotal</p>
                        <p class="text-dark">N3,000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary">Delivery fee</p>
                        <p class="text-dark">N2,000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary">VAT</p>
                        <p class="text-dark">N500</p>
                    </div>
                    <div class="d-flex justify-content-between mt-1 mb-2">
                        <p class="text-dark">Total</p>
                        <p class="text-dark fs-6">N5,000</p>
                    </div>
                </div>
                <button class="btn btn-lg w-100 text-white bg--orange">Proceed To Payment</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderSummaryCheckout'
}
</script>