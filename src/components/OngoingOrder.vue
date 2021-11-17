<template>
    <div>
        <div v-for="n, index in 2" :key="index" class="px-3 py-2 d-flex justify-content-around border border-dark mb-4 rounded align-items-center">
            <div>
                <img src="@/assets/images/dummyImg/Rectangle_24.png" alt="" height="96" class="rounded">
            </div>
            <div>
                <p class="mb-1">Pap and Akara</p>
                <p class="small text-secondary">Jevenik Resturant</p>
                <p class="mb-0 fw-bold">N3,000</p>
            </div>
            <div>
                <p class="mb-1">Order Number</p>
                <p class="mb-1">123456</p>
            </div>
            <div class="d-flex">
                <router-link to="/trackorders" class="btn bg--orange text-white me-2">Track Order</router-link>
                <button class="btn text--orange outline--orange">Cancel Order</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OngoingOrder',
}
</script>