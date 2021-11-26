<template>
    <div>
        <p class="fs-4 fw-bold mb-4">{{title}}</p>
        <div class="row">
            <div class="card border-0 mb-4" v-for="meal,index in meals" :key="index" :class="col">
                <router-link to="" class="row text-decoration-none text-dark" data-bs-toggle="modal" :data-bs-target="`#FoodDetails${meal.value.id}`">
                    <div class="col-md-6 col-6">
                        <div class="card-img-overlay">
                            <button class="btn-light btn-sm btn rounded-circle">
                                <i class="bi bi-heart text-dark"></i>
                            </button>
                        </div>
                        <img :src="meal.value.img.fileUrl != null ? meal.value.img.fileUrl : ''" class="card-img" height="116">
                    </div>
                    <div class="col-md-6 col-6">
                        <p class="fw-bold mb-1">{{meal.value.title}}</p>
                        <p class="text-secondary small mb-2 text-truncate" :title="meal.value.description">{{meal.value.description}}</p>
                        <p class="text-secondary mb-1 fw-bold">{{meal.value.currency}} {{parseFloat(meal.value.price.toString())}}</p>
                        <p class="text-secondary small mb-0">Delivery Fee <i class="bi bi-dot"></i>30-40 min</p>
                    </div>
                </router-link>
                <FoodDetails :menu="meal"/>
            </div>
        </div>
    </div>
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
            type: Array
        },
        col:{
            type: String
        }
    },
}
</script>
<style scoped>
</style>