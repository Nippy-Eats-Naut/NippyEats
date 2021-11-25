<template>
    <div class="card border-0">
        <div title="meal image" class="card-img hero-img"></div>
        <div class="card-img-overlay" :class="desktop? 'px-5':''">
            <p class="fs-1 fw-bold text-white">Eat anywhere !</p>
            <div class="p-2 --address" :class="desktop? 'w-50':''">
                <div class="input-group has-icon rounded">
                    <span class="form-control-feedback">
                        <i class="bi bi-geo-alt-fill text-white"></i>
                    </span>
                    <input type="text" class="form-control border-0 text-white rounded bg-transparent w-50" placeholder="Where are you at?" v-model="addr">
                    <button class="btn text-white bg--orange" @click="getProvider">Find Food</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-5">
        <p class="fs-4 text-center fw-bold">Our Top Recommendatons</p>
        <p class="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <div class="mt-3">
            <BrowseCard :meals="4" />
        </div>
    </div>
    <div class="container mb-5">
        <p class="fs-4 text-center fw-bold">New On NippyEats</p>
        <NewResturants :resturants="newProviders" />
    </div>
    <div class="container mb-5">
        <div class="card border-0">
            <img class="card-img download" src="@/assets/images/Mask_Group.png" :class="desktop?'':'ms-2'">
            <div class="card-img-overlay download" :class="desktop?'px-5':'ps-2 pe-5'">
                <p class="text-white fw-bold" :class="desktop?'fs-1':'fs-4'">Download the App</p>
                <p class="text-white"  :class="desktop?'':'small w-75 mb-1'">Make meals more accessible on your fingertips</p>
                <div class="d-flex mt-2">
                    <a href="" class="me-3">
                        <img src="@/assets/images/google.png" alt="Get on google play" :width="desktop?100:60" :height="desktop?30:20">
                    </a>
                    <a href="">
                        <img src="@/assets/images/apple.png" alt="Get on apple store" :width="desktop?100:60" :height="desktop?30:20">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-6">
                <img src="@/assets/images/Group_68.png" alt="Where To Eat" class="img-fluid">
            </div>
            <div class="col-md-4">
                <p class="fw-bold fs-1">Looking for Where To Eat?</p>
                <p class="text-secondary mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <router-link to="" class="btn text--orange">
                    Find Resturant <i class="ms-2 bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
        <div class="row mb-5 justify-content-center">
            <div class="col-md-4">
                <p class="fw-bold fs-1">List Your Food Business</p>
                <p class="text-secondary mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <router-link to="/food-listing" class="btn text--orange">
                    Enlist Resturant <i class="ms-2 bi bi-arrow-right"></i>
                </router-link>
            </div>
            <div class="col-md-6">
                <img src="@/assets/images/Group_71.png" alt="Food Business" class="img-fluid">
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-6">
                <img src="@/assets/images/Group_73.png" alt="Delivery Partner" class="img-fluid">
            </div>
            <div class="col-md-4">
                <p class="fw-bold fs-1">Become A Delivery Partner</p>
                <p class="text-secondary mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <router-link to="/become-a-delivery-partner" class="btn text--orange">
                    Join As A Partner <i class="ms-2 bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import data from '@/assets/db.json'
import BrowseCard from '../components/BrowseCard.vue'
import NewResturants from '../components/NewResturants.vue';
import moment from 'moment'
export default {
    name: "HomePage",
    inject: ["mq"],
    data() {
        return {
            addr: null,
            newProviders: []
        };
    },
    methods:{
        getProvider(){
            navigator.geolocation.getCurrentPosition(position => {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                this.$store.commit('store_location', {long,lat});
                console.log(lat, long);
            })
            this.$router.push('/home')
        }
    },
    computed: {
        meals() {
            return data[0].meals;
        },
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
    components: { BrowseCard, NewResturants },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'https://api.nippyeats.com/v1/foodies/providers',
            headers: { }
        };

        this.axios(config)
        .then(response => {
            let data = response.data.data.data
            let fooData =  data.sort(function(a, b){
                var foo = moment(a.updatedAt, "DD/MM/YYYY").format();
                var bar = moment(b.updatedAt, "DD/MM/YYYY").format();

                return new Date( bar ) - new Date( foo )
            }).slice(0,6);
            this.newProviders = fooData;
        })
    }
}
</script>
<style scoped>
    .card-img.download{
        z-index: 1
    }
    .card-img-overlay{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .card-img-overlay.download{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(252, 76, 1, 1);
        border-radius: 15px;
    }
    .hero-img{
        background-image: url("../assets/images/Rectangle_1.png");
        background-color: hsla(0, 0%, 0%, 0.55);
        height: 40vh;
        background-size: cover;
    }
    input::placeholder{
        color: white;
    }
    .--address{
        background: rgba(195, 195, 195, 0.21);
        border: 1px solid #FFFFFF;
        border-radius: 5px;
    }
    @media only screen and (min-width: 768px) {
        .hero-img{
            height: 100vh;
        } 
    }
</style>