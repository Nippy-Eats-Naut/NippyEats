<template>
    <div>
        <div>
            <ResturantPageCarousel />
        </div>
        <div class="container mt-3">
            <div class="d-flex justify-content-between">
                <div>
                    <p class="fs-3 fw-bold">Jevinik Resturant</p>
                    <div class="d-flex">
                        <div class="d-flex" v-for="n, index in 5" :key="index">
                            <i class="bi bi-star-fill text--orange"></i>
                        </div>
                        <p class="ms-2">4.5(245)</p><i class="mx-1 bi bi-dot"></i>
                        <router-link to="" class="text-secondary">Reviews (3)</router-link>
                    </div>
                    <div class="d-flex">
                        <p class=" me-3">
                            <i class="bi bi-geo-alt-fill me-1"></i>
                            171, Aminu Kano Cresent, Wuse, Abuja
                        </p>
                        <p class="">
                            <i class="bi bi-clock-fill me-1"></i>
                            Every Day 10:45 AM - 09:00 PM
                        </p>
                    </div>
                </div>
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
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="d-flex justify-content-evenly mb-3">
                        <button class="btn text--orange">Breakfast</button>
                        <button class="btn">Lunch</button>
                        <button class="btn">Dinner</button>
                        <button class="btn">Brunch</button>
                        <button class="btn">Late Night</button>
                        <button class="btn">More</button>
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Breakfast" :meals="meals.slice(0,4)" />
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Lunch" :meals="meals.slice(0,4)" />
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Dinner" :meals="meals.slice(0,3)" />
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Brunch" :meals="meals.slice(0,2)" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="border border-1 rounded border-dark px-2 py-1">
                        <p class="fw-bold text-center">Basket</p>
                        <BasketMeal :meals="meals.slice(0,2)"/>

                        <p class="">Order Summary</p>
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">Subtotal</p>
                            <p>N3,000</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">Delivery Fee</p>
                            <p>N500</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="">Total</p>
                            <p>N3,500</p>
                        </div>
                        <button class="btn bg--orange text-white w-100 btn-lg">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
import data from '@/assets/db.json'
import ResturantMeal from "../components/ResturantMeal.vue"
import BasketMeal from "../components/BasketMeal.vue";
import ResturantPageCarousel from '../components/ResturantPageCarousel.vue';
export default {
    name: "Resturant",
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
    components: { ResturantMeal, BasketMeal, ResturantPageCarousel }
}
</script>