<template>
    <div class="mt-5 container">
        <div>
            <p class="fs-5 fw-bold mb-2">Noodles</p>
            <p>8 Items</p>
        </div>
        <div class="d-flex mb-5">
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
            <ResturantMeal :meals="8" col="col-md-4" />
        </div>
    </div>
</template>
<script>
import ResturantMeal from "../components/ResturantMeal.vue";
export default {
    name: "FoodCategory",
    data() {
        return {
            type: "Delivery"
        };
    },
    components: { ResturantMeal }
}
</script>