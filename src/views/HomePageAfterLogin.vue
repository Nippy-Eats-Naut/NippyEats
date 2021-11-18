<template>
    <div class="container">
        <div class="d-flex mb-3">
            <div class="form-check mr-3 p-0">
                <input type="radio" name="type" class="form-check-input d-none" id="type1"  value="Delivery" v-model="type">
                <label for="type1" class="form-check-label btn" :class="type=='Delivery'? 'btn-dark text-white': ''">
                    Delivery
                </label>
            </div>
            <div class="form-check mr-3">
                <input type="radio" name="type" class="form-check-input d-none" id="type2"  value="Pickup" v-model="type">
                <label for="type2" class="form-check-label btn" :class="type=='Pickup'? 'btn-dark text-white': ''">
                    Pickup
                </label>
            </div>
            <div class="form-check mr-3">
                <input type="radio" name="type" class="form-check-input d-none" id="type3"  value="Dine-in" v-model="type">
                <label for="type3" class="form-check-label btn" :class="type=='Dine-in'? 'btn-dark text-white': ''">
                    Dine-in
                </label>
            </div>
        </div>
        <div class="mb-5">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="fs-5 fw-bold">Popular Near You</p>
                <router-link to="" class="text-dark small text-decoration-none">See All</router-link>
            </div>
            <ResturantCard :meals="4"/>
        </div>
        <div class="mb-5">
            <p class="fs-5 fw-bold">Dishes we Recommend</p>
            <ResturantCard :meals="4"/>
        </div>
        <div class="mb-5">
            <p class="fs-5 fw-bold">Browse By Food</p>
            <RecommendationCard :meals="meals.slice(0,3)" />
        </div>
    </div>
</template>
<script>
import data from '@/assets/db.json'
import ResturantCard from "../components/ResturantCard.vue"
import RecommendationCard from "../components/RecommendationCard.vue";
export default {
    name: "HomePageAfterLogin",
    data() {
        return {
            type: "Delivery"
        };
    },
    
    computed: {
        meals() {
            return data[0].meals;
        },
    },
    components: { ResturantCard, RecommendationCard }
}
</script>
<style scoped>
</style>