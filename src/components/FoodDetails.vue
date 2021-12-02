<template>
    <div>
        <div class="modal fade" :id="`FoodDetails${menu.id}`" tabindex="-1" aria-labelledby="FoodDetails" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header p-0">
                        <button type="button" class="btn-close bg-light mt-3 mx-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <img :src="menu.img != null ? menu.img : require('@/assets/images/2logo.png')" alt="" height="200" class="rounded w-100">
                    </div>
                    <div class="modal-body">
                        <div>
                            <p class="fw-bold fs-3 mb-1">{{menu.title}}</p>
                            <p class="text-secondary small mb-2">{{menu.description}}</p>
                            <div class="d-flex align-items-baseline">
                                <star-rating class="justify-content-center mr-1"
                                    :rating="menu.rating" :read-only="true" 
                                    :increment="0.5" :star-size="20">
                                </star-rating>
                                <!-- <p class="ms-2">{{menu.rating}}()</p> -->
                                <i class="mx-1 bi bi-dot"></i>
                                <a class="text-secondary" data-bs-toggle="modal" data-bs-target="#Reviews" data-bs-dismiss="modal">Reviews ()</a>
                                <Reviews :reviews="reviews" class="menu" />
                            </div>
                        </div>
                        
                        <div class="border border-1 border-light px-1 py-2">
                            <a class="btn coll d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <p class="fw-bold">Ingredient</p>
                                <p><i class="text-secondary bi bi-chevron-down"></i></p>
                            </a>
                            <div class="collapse" id="collapseExample1">
                                <div class="card card-body border-0">
                                    <div class="form-check" v-for="i,index in menu.ingredient" :key="index">
                                        <input class="form-check-input" type="radio" name="radioo" :id="`radio${index}`">
                                        <label class="form-check-label" for="radio1">{{i}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-1 border-light px-1 py-2">
                            <a class="btn coll d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <p class="fw-bold">Options</p>
                                <p><i class="text-secondary bi bi-chevron-down"></i></p>
                            </a>
                            <div class="collapse" id="collapseExample2">
                                <div class="card card-body border-0">
                                    <div v-for="opt,index in menu.options" :key="index">
                                        <p class="h6">{{opt.name}}</p>
                                        <div class="form-check" v-for="i,id in opt.items" :key="id">
                                            <input class="form-check-input" type="radio" name="radioo" :id="`radio${id}`">
                                            <label class="form-check-label" for="radio1">{{i}}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex p-3">
                        <div class="input-group me-3">
                            <button class="btn btn-dark border-end" @click="quantity--">-</button>
                            <input class="quantity-input" type="text" v-model="quantity">
                            <button class="btn btn-dark border-start" @click="quantity++">+</button>
                        </div>
                        <button type="button" class="btn btn-primary w-100 btn lg text-white" @click="addToBasket()">
                            <i class="bi bi-basket-fill me-1"></i>
                            Add to Basket ({{menu.currency}} {{parseFloat(menu.price.toString())}})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Reviews from "./Reviews.vue"
import StarRating from 'vue-star-rating'
export default {
    name: "FoodDetails",
    props:{
        menu: {
            type: Object,
        }
    },
    data() {
        return {
            quantity: 1,
            reviews: []
        };
    },
    methods:{
        addToBasket(){
            let quantity = this.quantity;
            let menu = this.menu
            this.$store.commit('add_menu', {menu, quantity})
        }
    },
    components: { Reviews, StarRating },
    /*beforeMount(){
        /*var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.id}/reviews`,
            headers: { }
        };*/
        /*this.axios(config)
        .then((response) => {
            this.reviews = response.data.data
        });*/
    
    //}
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
    .input-group{
        flex-wrap: nowrap;
        width: unset;
    }
    .coll:focus{
        box-shadow: unset;
    }
</style>