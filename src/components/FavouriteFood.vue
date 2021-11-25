<template>
    <div>
        <div v-for="n, index in 2" :key="index" class="p-4 d-flex justify-content-between border border-dark mb-4 rounded align-items-center">
            <div class="d-flex">
                <div class="me-3">
                    <img src="@/assets/images/dummyImg/Rectangle_24.png" alt="" :height="desktop?96:72" class="rounded">
                </div>
                <div>
                    <p class="mb-1 fw-bold">English Breakfast</p>
                    <p class="small text-secondary">Tender chicken marinated daily with an 
                        exotic blend of potato chips and ketchup
                    </p>
                    <p class="mb-0">N3,000</p>
                </div>
            </div>
            <div>
                <button class="btn text-white rounded-circle bg-dark btn-sm">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FavoruiteFood',
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    }
}
</script>