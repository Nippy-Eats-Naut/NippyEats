<template>
    <div class="d-grid justify-items-center align-items-center vh-100" v-if="provider.length == 0">
        <span
            class="spinner-border"
            role="status" aria-hidden="true"
            style="width: 8rem; height: 8rem"
        ></span>
    </div>
    <div v-else>
        <div>
            <ResturantPageCarousel :banner="provider"/>
        </div>
        <div class="container">
            <div class="mt-3">
                <div class="d-flex justify-content-between">
                    <div>
                        <p class="fs-3 fw-bold mb-2">{{provider.name}}</p>
                        <div class="d-flex align-items-baseline">
                            <star-rating class="justify-content-center"
                                v-model:rating="provider.rating" :read-only="true" 
                                :increment="0.5" :star-size="20">
                            </star-rating>
                            <p class="">(0)</p><i class="mx-1 bi bi-dot"></i>
                            <a class="text-secondary text-decoration-underline" data-bs-toggle="modal" data-bs-target="#Reviews">Reviews (0)</a>
                            <Reviews :reviews="reviews" class="provider"/>
                        </div>
                    </div>
                    <div class="d-flex mb-3" v-if="desktop">
                        <div class="form-check mr-3 p-0" v-for="modes,index in deliveryModes" :key="index">
                            <input type="radio" name="type" class="form-check-input d-none" :id="`type${index}`" :value="modes" v-model="deliveryMode">
                            <label :for="`type${index}`" class="form-check-label btn" :class="deliveryMode == modes? 'btn-dark text-white': ''">
                                {{modes}}
                            </label>
                        </div>
                    </div>
                </div>
                <div :class="desktop?'d-flex':''">
                    <p class="me-3 mb-2">
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
                <div v-if="!desktop" class="mb-5">
                    <div class="d-flex mb-3 tab border-bottom">
                        <div class="form-check ps-0">
                            <input type="radio" name="all" class="form-check-input d-none" id="all" value="All" v-model="selectedTime">
                            <label for="all" class="form-check-label btn" :class="selectedTime == 'All'? 'text--orange': ''">
                                All
                            </label>
                        </div>
                        <div class="form-check ps-1" v-for="_time,index in category" :key="index">
                            <input type="radio" name="time" class="form-check-input d-none" :id="`time${index}`" :value="_time" v-model="selectedTime">
                            <label :for="`time${index}`" class="form-check-label btn-sm" :class="selectedTime == _time? 'text--orange': ''">
                                {{_time}}
                            </label>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="form-check mr-3 p-0" v-for="modes,index in deliveryModes" :key="index">
                            <input type="radio" name="type" class="form-check-input d-none" :id="`type${index}`" :value="modes" v-model="deliveryMode">
                            <label :for="`type${index}`" class="form-check-label btn-sm" :class="deliveryMode == modes? 'btn-dark text-white': ''">
                                {{modes}}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="d-flex overflow-auto text-nowrap align-items-baseline mb-5" v-if="desktop">
                            <div class="form-check ps-0">
                                <input type="radio" name="all" class="form-check-input d-none" id="all" value="All" v-model="selectedTime">
                                <label for="all" class="form-check-label btn-sm" :class="selectedTime == 'All'? 'text--orange': ''">
                                    All
                                </label>
                            </div>
                            <div class="form-check ps-1" v-for="_time,index in category" :key="index">
                                <input type="radio" name="time" class="form-check-input d-none" :id="`time${index}`" :value="_time" v-model="selectedTime">
                                <label :for="`time${index}`" class="form-check-label btn-sm" :class="selectedTime == _time? 'text--orange': ''">
                                    {{_time}}
                                </label>
                            </div>
                        </div>
                        <div class="mb-5" v-for="meal,index in paginatedMenu" :key="index">
                            <ResturantMeal :link="true" :menus="meal" col="col-md-6" />
                        </div>
                        <div class="d-flex justify-content-center mb-5">
                            <button class="btn btn-primary" @click="pagMenu += 4">View more</button>
                        </div>
                        <div v-if="!desktop">
                            <hr>
                        </div>
                    </div>
                    <div class="col-md-4 mt-2">
                        <BasketMeal />
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
import StarRating from 'vue-star-rating'
export default {
    name: "Resturant",
    data() {
        return {
            provider: [],
            reviews:[],
            menus: [],
            pagMenu: 4,
            selectedTime: "All",
        };
    },
    inject: ["mq"],
    computed: {
        deliveryMode:{
            get(){
                return this.$store.state.deliveryMode
            },
            set(value){
                this.$store.commit('deliveryMode', value)
            }
        },
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
            this.$store.commit('deliveryMode', fooMode[0])
            return fooMode
        },
        workingDays(){
            var init = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var wDays = this.provider.orderInformation.workingDays
            var days = []
            var fooDays = {
                __days: [],
                closingTime: wDays[0].closingTime,
                openingTime: wDays[0].openingTime
            }
            wDays.filter(_day=> {
                    days.push(_day.day)
            });
            if(wDays.length == 7){
                return `EveryDay  ${fooDays.openingTime} - ${fooDays.closingTime}`
            }
            else if (wDays.length >= 4){
                let ex = init.filter(_day => !days.includes(_day));
                return `EveryDay  ${fooDays.openingTime} - ${fooDays.closingTime}, except ${ex.toString()}`
            }
            else{
                wDays.filter(_day=> {
                    fooDays.__days.push(_day.day)
                })
                return fooDays;
            }
        },
        paginatedMenu(){
            var menus = this.menus
            if (this.selectedTime == "All")
                return menus.slice(0, this.pagMenu);
            else{  
                let _menus = menus.find(menu=> {
                    return menu.title == this.selectedTime 
                });
                var meals = [];
                meals.push(_menus);
                return meals
            }
        },
        category(){
            return this.menus.map(menu=> {
                return menu.title
            });
        },
    },
    components: { ResturantMeal, BasketMeal, ResturantPageCarousel, Reviews, StarRating },
    beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.$route.params.id}/`,
            headers: { }
        };
        var config2 = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.$route.params.id}/reviews`,
            headers: { }
        };
        var config3 = {
            method: "get",
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.$route.params.id}/categories`,
            headers: { }
        };
        this.axios(config)
        .then((response) => {
            this.provider = response.data.data

            const _provider = {
                name: response.data.data.name,
                longitude: response.data.data.longitude,
                latitude: response.data.data.latitude
            }
            this.$store.commit('fetch_provider', _provider)
        });

        this.axios(config2)
        .then((response) => {
            this.reviews = response.data.data
        });

        this.axios(config3)
            .then(response => {
                this.menus = response.data.data
        });  
    }
}
</script>
<style scoped>
    .d-flex.tab{
        overflow-x: auto;
        white-space: nowrap;
         align-items: baseline;
    }
    .btn:hover {
        color: unset;
    }
</style>