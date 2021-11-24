<template>
    <div>
        <div class="modal fade" id="FoodDetails" tabindex="-1" aria-labelledby="FoodDetails" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header p-0">
                        <button type="button" class="btn-close bg-light mt-3 mx-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <img src="@/assets/images/dummyImg/Rectangle_24.png" alt="" height="200" class="rounded w-100">
                    </div>
                    <div class="modal-body">
                        <div>
                            <p class="fw-bold fs-3 mb-1">English Breakfast</p>
                            <p class="text-secondary small mb-2">Tender chicken marinated daily with an exotic blend of potato chips and ketchup</p>
                            <div class="d-flex">
                                <div class="d-flex" v-for="n, index in 5" :key="index">
                                    <i class="bi bi-star-fill text--orange"></i>
                                </div>
                                <p class="ms-2">4.5(245)</p><i class="mx-1 bi bi-dot"></i>
                                <a class="text-secondary" data-bs-toggle="modal" data-bs-target="#Reviews" data-bs-dismiss="modal">Reviews (3)</a>
                                <Reviews :reviews="reviews" class="menu" />
                            </div>
                        </div>
                        
                        <div class="border border-1 border-light px-1 py-2">
                            <a class="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <p class="fw-bold">Extra Protein</p>
                                <p><i class="text-secondary bi bi-chevron-down"></i></p>
                            </a>
                            <div class="collapse" id="collapseExample1">
                                <div class="card card-body border-0">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio1">
                                        <label class="form-check-label" for="radio1">Chili Lime Shrimp</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio2">
                                        <label class="form-check-label" for="radio2">Lemongrass Chicken</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio3">
                                        <label class="form-check-label" for="radio3">Seasoned Fried Egg</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-1 border-light px-1 py-2">
                            <a class="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <p class="fw-bold">Choice of Drink</p>
                                <p><i class="text-secondary bi bi-chevron-down"></i></p>
                            </a>
                            <div class="collapse" id="collapseExample2">
                                <div class="card card-body border-0">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio1">
                                        <label class="form-check-label" for="radio1">Chili Lime Shrimp</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio2">
                                        <label class="form-check-label" for="radio2">Lemongrass Chicken</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio3">
                                        <label class="form-check-label" for="radio3">Seasoned Fried Egg</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-1 border-light px-1 py-2">
                            <a class="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <p class="fw-bold">Extra Protein</p>
                                <p><i class="text-secondary bi bi-chevron-down"></i></p>
                            </a>
                            <div class="collapse" id="collapseExample3">
                                <div class="card card-body border-0">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio1">
                                        <label class="form-check-label" for="radio1">Chili Lime Shrimp</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio2">
                                        <label class="form-check-label" for="radio2">Lemongrass Chicken</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio3">
                                        <label class="form-check-label" for="radio3">Seasoned Fried Egg</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-1 border-light px-1 py-2">
                            <a class="btn d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                <p class="fw-bold">Extra Protein</p>
                                <p><i class="text-secondary bi bi-chevron-down"></i></p>
                            </a>
                            <div class="collapse" id="collapseExample4">
                                <div class="card card-body border-0">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio1">
                                        <label class="form-check-label" for="radio1">Chili Lime Shrimp</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio2">
                                        <label class="form-check-label" for="radio2">Lemongrass Chicken</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioo" id="radio3">
                                        <label class="form-check-label" for="radio3">Seasoned Fried Egg</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex p-3">
                        <div class="input-group">
                            <button class="btn btn-dark border-0">-</button>
                            <input class="quantity-input" type="text" v-model="quantity">
                            <button class="btn btn-dark border-0">+</button>
                        </div>
                        <button type="button" class="btn bg--orange w-100 btn lg text-white">
                            <i class="bi bi-basket-fill me-1"></i>
                            Add to Basket (N6000)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Reviews from "./Reviews.vue"
export default {
    name: "FoodDetails",
    props:{
        id: {
            type: String,
        }
    },
    data() {
        return {
            quantity: 1,
            menu: null,
            reviews: []
        };
    },
    components: { Reviews },
    beforeMount(){
        var config = {
            method: 'get',
            //url: `https://api.nippyeats.com/v1/foodies/menus/${this.id}`,
            headers: { }
        };
        var config2 = {
            method: 'get',
           // url: `https://api.nippyeats.com/v1/foodies/providers/${this.id}/reviews`,
            headers: { }
        };
        this.axios(config)
        .then((response) => {
            this.menu = response.data.data
        });
        this.axios(config2)
        .then((response) => {
            this.reviews = response.data.data
        });
    
    }
}
</script>
<style scoped>
    .btn-close{
        position: absolute;
        right: 0;
        top: 0
    }
    .quantity-input{
        width: 50px;
        color: white;
        border: 0px;
        font-size: small;
        background-color: #212529;
    }
</style>