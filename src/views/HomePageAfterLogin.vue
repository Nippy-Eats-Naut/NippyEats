<template>
    <div class="container" :class="desktop?'mt-5':'mt-3'">
        <div class="d-flex mb-4">
            <div class="form-check mr-3 p-0" v-for="modes,index in deliveryModes" :key="index">
                <input type="radio" name="type" class="form-check-input d-none" :id="`type${index}`" :value="modes" v-model="type">
                <label :for="`type${index}`" @click="deliveryHandler" class="form-check-label btn" :class="type == modes? 'btn-dark text-white': ''">
                    {{modes}}
                </label>
            </div>
        </div>
        <div class="mb-5">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="fs-5 fw-bold">Popular Near You</p>
                <router-link to="/resturants/all" class="text-dark small text-decoration-none">See All</router-link>
            </div>
            <ResturantCard :providers="returantsFiltered.resturants"/>
        </div>
        <div class="mb-5">
            <p class="fs-5 fw-bold">New vendors</p>
            <NewResturants :resturants="returantsFiltered.newProviders" />
        </div>
        <div class="mb-5">
            <p class="fs-5 fw-bold">Recommended vendors</p>
            <RecommendationCard :meals="returantsFiltered.recommended"/>
        </div>
        <div class="mb-5">
            <p class="fs-5 fw-bold">Fast food</p>
            <BrowseCard :menus="fastFood" />
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import ResturantCard from "../components/ResturantCard.vue"
import BrowseCard from "../components/BrowseCard.vue";
import RecommendationCard from '../components/RecommendationCard.vue';
import NewResturants from '../components/NewResturants.vue';
export default {
    name: "HomePageAfterLogin",
    data() {
        return {
            type: "Delivery",
            deliveryModes: ["Delivery", "Pickup", "Dine-in"],
            resturants: [],
            newProviders: [],
            recommended: [],
            fastFood:[],
        };
    },
    inject: ['mq'],
    methods:{
        deliveryHandler(){
            var mode;
            if (this.type == 'Delivery') mode = 'delivery'
            else if (this.type == 'Dine-in') mode = 'dine_in'
            else mode = 'pick_up'

            var resturants = this.resturants.filter(a => {
                var modes = a.orderInformation.deliveryModes.find((modes) => modes === mode);
                return modes
            }).slice(0, 4);

            var newProviders = this.newProviders.filter(a => {
                var modes = a.orderInformation.deliveryModes.find((modes) => modes === mode);
                return modes
            }).slice(0, 8);

            var recommended = this.recommended.filter(a => {
                var modes = a.orderInformation.deliveryModes.find((modes) => modes === mode);
                return modes
            }).slice(0, 4);

            const data ={
                resturants: resturants,
                newProviders: newProviders,
                recommended: recommended,
            }
            return data;
        }
    },
    computed: {
        ...mapGetters([
            'longitude','latitude','address'
        ]),
        ...mapGetters('auth',['loggedIn']),
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
        returantsFiltered(){
            return this.deliveryHandler()
        }
    },
    components: { ResturantCard, BrowseCard, RecommendationCard, NewResturants },
    beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers?longitude=${this.longitude}&latitude=${this.latitude}`,
            headers: { }
        };
         var config2 = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/featured-and-recommended`,
            headers: { }
        };
        
        var config3 = {
            method: "get",
            url: "https://api.nippyeats.com/v1/foodies/explore",
            headers: { }
        };
        var config4 = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers`,
            headers: { }
        };
        this.axios(config)
        .then((response) => {
            let data = response.data.data.data
            this.resturants = data
        });

        this.axios(config2)
        .then((response) => {
            this.recommended = response.data.data.recommended
        });

        this.axios(config3)
        .then(response => {
            let data = response.data.data;
            let __data = data.filter(a => {
                if(a.category == "menu") 
                    return a
            });
            this.fastFood = __data;
        });

        this.axios(config4)
        .then((response) => {
            let data = response.data.data.data
            let fooData =  data.sort(function(a, b){
                var foo = a.updatedAt;
                var bar = b.updatedAt;
                return new Date( bar ) - new Date( foo )
            })
            this.newProviders = fooData;
        });
    },
    created() {
        if (!this.loggedIn && !this.address) {
            this.$router.push("/");
        }
    },
}
</script>
<style scoped>
</style>