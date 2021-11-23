<template>
        <div>
            <ResturantPageCarousel :banner="provider.banner.fileUrl"/>
        </div>
    <div class="container">
        <div class="mt-3">
            <div class="d-flex justify-content-between">
                <div>
                    <p class="fs-3 fw-bold mb-2">{{provider.name}}</p>
                    <div class="d-flex">
                        <div class="d-flex">
                            <i class="bi bi-star-fill text--orange"></i>
                        </div>
                        <p class="ms-2">{{provider.rating}}(0)</p><i class="mx-1 bi bi-dot"></i>
                        <a class="text-secondary text-decoration-underline" data-bs-toggle="modal" data-bs-target="#Reviews">Reviews (0)</a>
                        <Reviews :reviews="reviews"/>
                    </div>
                </div>
                <div class="d-flex mb-3" v-if="desktop">
                    <div class="form-check mr-3 p-0" v-for="modes,index in provider.orderInformation.deliveryModes" :key="index">
                        <input type="radio" name="type" class="form-check-input d-none" :id="`type${index}`" :value="modes" v-model="type">
                        <label :for="`type${index}`" class="form-check-label btn" :class="type == modes? 'btn-dark text-white': ''">
                            {{modes}}
                        </label>
                    </div>
                </div>
            </div>
            <div :class="desktop?'d-flex':''">
                <p class=" me-3 mb-2">
                    <i class="bi bi-geo-alt-fill me-1"></i>
                    {{provider.contactInformation.address}}
                </p>
                <div class="d-flex">
                    <i class="bi bi-clock-fill me-1"></i>
                    <p v-if="provider.orderInformation.workingDays.length >= 4">{{workingDays}}</p>
                    <div class="d-flex" v-else>
                        <ul class="ps-1">
                            <li v-for="days,index in workingDays.__days" :key="index" class="mb-0 small">{{days}}</li>
                        </ul>
                        <p>{{workingDays.openingTime}} - {{workingDays.closingTime}}</p>
                    </div>
                </div>
            </div>
            <div v-if="!desktop">
                <div class="d-flex justify-content-evenly mb-3 tab border-bottom">
                    <button class="btn text--orange">Breakfast</button>
                    <button class="btn">Lunch</button>
                    <button class="btn">Dinner</button>
                    <button class="btn">Brunch</button>
                    <button class="btn">Late Night</button>
                    <button class="btn">More</button>
                </div>
                <div class="d-flex mb-3">
                    <div class="form-check mr-3 p-0" v-for="modes,index in deliveryModes" :key="index">
                        <input type="radio" name="type" class="form-check-input d-none" :id="`type${index}`" :value="modes" v-model="type">
                        <label :for="`type${index}`" class="form-check-label btn" :class="type == modes? 'btn-dark text-white': ''">
                            {{modes}}
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="d-flex justify-content-evenly mb-3" v-if="desktop">
                        <button class="btn text--orange">Breakfast</button>
                        <button class="btn">Lunch</button>
                        <button class="btn">Dinner</button>
                        <button class="btn">Brunch</button>
                        <button class="btn">Late Night</button>
                        <button class="btn">More</button>
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Breakfast" :meals="4" col="col-md-6" />
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Lunch" :meals="4" col="col-md-6" />
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Dinner" :meals="3" col="col-md-6" />
                    </div>
                    <div class="mb-5">
                        <ResturantMeal title="Brunch" :meals="2" col="col-md-6" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="border border-1 rounded border-dark px-2 py-1 mb-5">
                        <p class="fw-bold text-center fs-6">Basket</p>
                        <BasketMeal :meals="2"/>

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
import ResturantMeal from "../components/ResturantMeal.vue"
import BasketMeal from "../components/BasketMeal.vue";
import ResturantPageCarousel from '../components/ResturantPageCarousel.vue';
import Reviews from '../components/Reviews.vue';
export default {
    name: "Resturant",
    data() {
        return {
            type: "Delivery",
            provider: null,
            reviews:[]
        };
    },
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
        deliveryModes(){
            var modes = this.provider.orderInformation.deliveryModes
            var fooMode = []
            modes.filter(mode => {
                if (mode == 'delivery') fooMode.push('Delivery')
                else if (mode == 'dine_in') fooMode.push('Dine in')
                else fooMode.push('Pick up')
            })
            return fooMode
        },
        workingDays(){
            var init = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var days = this.provider.orderInformation.workingDays
            var fooDays = {
                __days: [],
                closingTime: days[0].closingTime,
                openingTime: days[0].openingTime
            }
            if(days.length >= 4){
                let ex = init.filter(_day => !days.includes(_day));
                return `EveryDay  ${fooDays.openingTime} - ${fooDays.closingTime}, except ${ex.toString()}`
            }
            else{
                days.filter(_day=> {
                    fooDays.__days.push(_day.day)
                })
                return fooDays;
            }
        }
    },
    components: { ResturantMeal, BasketMeal, ResturantPageCarousel, Reviews },
    beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.$route.params.id}`,
            headers: { }
        };
         var config2 = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.$route.params.id}/reviews`,
            headers: { }
        };
            this.axios(config)
            .then((response) => {
                this.provider = response.data.data
            });
            this.axios(config2)
            .then((response) => {
                this.reviews = response.data.data
            });
        
    }
}
</script>
<style scoped>
    .d-flex.tab{
        overflow-x: auto;
    }
</style>