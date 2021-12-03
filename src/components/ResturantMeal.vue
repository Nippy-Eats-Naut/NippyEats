<template>
    <div>
        <div v-if="link" class="d-flex justify-content-between mb-4">  
            <p class="h4 mb-0">{{menus.title}}</p>
            <router-link :to="`/category/${menus.providerId}/${menus.slug}`">see more</router-link> 
        </div>
        <div class="row">
            <div class="card shadow-sm py-2 border-0 mb-3" v-for="meal,index in menus.menus.slice(0,pagMenu)" :key="index" :class="col">
                <a class="row text-decoration-none text-dark" data-bs-toggle="modal" :data-bs-target="`#FoodDetails${meal.id}`">
                    <div class="col-md-6 col-6">
                        <div class="card-img-overlay">
                            <button class="btn-light btn-sm btn rounded-circle">
                                <i class="bi bi-heart text-dark"></i>
                            </button>
                        </div>
                        <img :src="meal.img != null ? meal.img : require('@/assets/images/2logo.png')" :class="desktop?'auto-img':'mobile-img'">
                    </div>
                    <div class="col-md-6 col-6">
                        <p class="fw-bold mb-1">{{meal.title}}</p>
                        <p class="text-secondary small mb-2 text-truncate" :title="meal.description">{{meal.description}}</p>
                        <p class="text-secondary mb-1 fw-bold">{{meal.currency}} {{parseFloat(meal.price.toString())}}</p>
                        <p class="text-secondary small mb-0">Avg. delivery time <i class="bi bi-dot"></i>30-40 min</p>
                    </div>
                </a>
                <FoodDetails :menu="meal"/>
            </div>
        </div>
        <div class="d-flex justify-content-center mb-4" v-if="!link">
            <button class="btn btn-primary" @click="pagMenu += 4">View more</button>
        </div>
    </div>
</template>
<script>
import FoodDetails from "./FoodDetails.vue"
export default {
    name: 'ResturantMeal',
    components: {FoodDetails},
    inject: ['mq'],
    data(){
        return{
            pagMenu: this.link ? 4:6
        }
    },
    props:{
        title:{
            type: String
        },
        menus: {
            type: Object
        },
        col:{
            type: String
        },
        link:{
            type: Boolean
        }
    },
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
}
</script>
<style scoped>
    .mobile-img{
        aspect-ratio: 2/1;
        height: 100%;
        width: 100%
    }
</style>