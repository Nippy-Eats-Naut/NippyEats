<template>
    <div class="border border-1 rounded p-3 border-dark">
        <p class="text-center fs-6 fw-bold mb-3">Order Summary</p>
        <div v-for="n, index in 2" :key="index" class="mb-2">
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <img src="@/assets/images/dummyImg/Rectangle_24.png" alt="" height="96" class="rounded me-2">
                    <div class="ms-3">
                        <p class="mb-1">Red Velvet Pancake</p>
                        <p class="text-secondary small mb-1">Jelivinik Resturant</p>
                        <p class="text-secondary small mb-0">1 plate</p>
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
                        <p class="text-dark mb-1">N3,000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">Delivery fee</p>
                        <p class="text-dark mb-1">N2,000</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-secondary mb-1">VAT</p>
                        <p class="text-dark mb-1">N500</p>
                    </div>
                    <div class="d-flex justify-content-between mt-1 mb-2">
                        <p class="text-dark mb-1">Total</p>
                        <p class="text-dark fs-6 mb-1">N5,000</p>
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