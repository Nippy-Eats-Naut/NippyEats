<template>
    <div>
        <div v-for="n, index in 2" :key="index" class="p-4 d-flex justify-content-between border border-dark mb-4 rounded align-items-center">
            <div class="d-flex">
                <div class="me-4">
                    <img src="@/assets/images/dummyImg/Rectangle_29.png" alt="" height="96" class="rounded">
                </div>
                <div>
                    <p class="mb-1 fw-bold">Jevenik Resturant</p>
                    <div class="d-flex mb-3 small align-items-baseline">
                        <div class="d-flex small" v-for="n, index in 5" :key="index">
                            <i class="bi bi-star-fill text--orange"></i>
                        </div>
                        <p class="ms-3 mb-0 text-secondary">4.5(245)</p>
                    </div>
                    <p class="mb-0">
                        <i class="bi bi-geo-alt-fill me-1"></i>
                        171, Aminu Kano Cresent, Wuse, Abuja
                    </p>
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
    name: 'FavoruiteResturants',
}
</script>