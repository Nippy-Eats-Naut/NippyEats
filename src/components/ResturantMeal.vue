<template>
    <div>
        <div class="d-flex justify-content-between mb-4">  
            <p class="h4 mb-0">{{menus.title}}</p>
            <router-link to=""> see all</router-link> 
        </div>
        <div class="row">
            <div class="card border-0 mb-4" v-for="meal,index in menus.menus.slice(0,4)" :key="index" :class="col">
                <a class="row text-decoration-none text-dark" data-bs-toggle="modal" :data-bs-target="`#FoodDetails${meal.id}`">
                    <div class="col-md-6 col-6">
                        <div class="card-img-overlay">
                            <button class="btn-light btn-sm btn rounded-circle">
                                <i class="bi bi-heart text-dark"></i>
                            </button>
                        </div>
                        <img :src="meal.img != null ? meal.img : require('@/assets/images/2logo.png')" class="auto-img w-100">
                    </div>
                    <div class="col-md-6 col-6">
                        <p class="fw-bold mb-1">{{meal.title}}</p>
                        <p class="text-secondary small mb-2 text-truncate" :title="meal.description">{{meal.description}}</p>
                        <p class="text-secondary mb-1 fw-bold">{{meal.currency}} {{parseFloat(meal.price.toString())}}</p>
                        <p class="text-secondary small mb-0">Average delivery time <i class="bi bi-dot"></i>30-40 min</p>
                    </div>
                </a>
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
        menus: {
            type: Object
        },
        col:{
            type: String
        }
    },
}
</script>
<style scoped>
</style>