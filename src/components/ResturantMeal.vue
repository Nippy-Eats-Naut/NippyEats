<template>
    <div>
        <p class="fs-4 fw-bold mb-4">{{title}}</p>
        <div class="row">
            <div class="col-md-6 card border-0 mb-3" v-for="meal,index in meals" :key="index" >
                <a class="row text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#FoodDetails">
                    <div class="col-md-6">
                        <div class="card-img-overlay">
                            <button class="bg--grey btn rounded-circle">
                                <i class="bi bi-heart text-white"></i>
                            </button>
                        </div>
                        <img src="@/assets/images/dummyImg/Rectangle_24.png" class="card-img" height="169">
                    </div>
                    <div class="col-md-6">
                        <p class="fw-bold mb-1">English Breakfast</p>
                        <p class="text-secondary small mb-2">Tender chicken marinated daily with an exotic blend of potato chips and ketchup</p>
                        <p class="text-secondary mb-1 fw-bold">N3,000</p>
                        <p class="text-secondary small mb-0">Delivery Fee <i class="bi bi-dot"></i>30-40 min</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <FoodDetails />
</template>
<script>
import FoodDetails from "./FoodDetails.vue"
export default {
    name: 'ResturantMeal',
    components: {FoodDetails},
    props:{
        title:{
            type: String
        },
        meals: {
            type: Object
        }
    }
}
</script>
<style scoped>
    
    .card-img-overlay{
        left: unset;
    }
</style>