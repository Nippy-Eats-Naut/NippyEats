<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div>
            <p class="text-secondary">Subtotal</p>
            <div class="d-flex justify-content-between">
                <p class="text-secondary">Jevenik</p>
                <p class="text-dark">N3,000</p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="text-secondary">Amala360</p>
                <p class="text-dark">N3,000</p>
            </div>
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
                <p class="text-dark">N7,500</p>
            </div>
        </div>
        <button class="btn btn-lg w-100 text-white bg--orange">Proceed To Checkout</button>
    </div>
</template>
<script>
export default {
    name: 'BasketOrderSummary'
}
</script>