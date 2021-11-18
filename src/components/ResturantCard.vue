<template>
    <div>
        <div class="row">
            <div v-for="meal,index in meals" :key="index" class="col-md-3 mb-3 card border-0 px-2">
                <div class="card-img-overlay">
                     <button class="bg--grey btn rounded-circle">
                        <i class="bi bi-heart-fill text-white"></i>
                    </button>
                </div>
                <router-link to="" class="text-decoration-none text-dark">
                    <div class="rounded image-div">
                        <img src="@/assets/images/dummyImg/Rectangle_29.png" class="card-img" height="176">
                    </div>
                    <div class="d-flex justify-content-between py-2 card-body px-1">
                        <div>
                            <p class="card-title fw-bold">Cloud Kitchen</p>
                            <p class="card-text small text-secondary">N300 Delivery Fee <i class="bi bi-dot"></i> 30-40 min</p>
                        </div>
                        <div>
                            <p class="small d-flex"><i class="bi bi-star-fill text--orange me-1"></i> 4.5</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResturantCard',
    props: {
        meals:{
            type: Number
        }
    }
}
</script>
<style scoped>
    p.card-text.text-secondary{
        font-size: 0.8rem;
    }
    .btn.bg--grey{
        background: rgba(1, 1, 1, 0.7);
    }
    .card-img-overlay{
        left: unset;
    }
</style>