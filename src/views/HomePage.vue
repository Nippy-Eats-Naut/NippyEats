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
                    
                    <GMapAutocomplete
                        placeholder="Where are you at?"
                        @place_changed="setPlace"
                        class="form-control border-0 text-white rounded bg-transparent w-50"
                        
                    >
                    </GMapAutocomplete>
                    <button class="btn text-white btn-primary " @click="getProvider">Find Food</button>
                </div>
            </div>
            <Alert class="mt-2" :message="$route.params.message || message" category="alert" :success="success" :link="false" :class="desktop?'w-50':''"/>
        </div>
    </div>
    <div class="container my-5">
        <p class="fs-4 text-center fw-bold">Our Top Recommendatons</p>
        <p class="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <div class="mt-3">
            <BrowseCard :menus="recommended" />
        </div>
    </div>
    <div class="container mb-5">
        <p class="fs-4 text-center fw-bold">New On NippyEats</p>
        <NewResturants :resturants="newProviders" />
    </div>
    <div class="container mb-5">
        <div class="card border-0">
            <div>
                <img src="@/assets/images/downloadImage.png"  class="card-img" alt="Get on google play">
                <div class="card-img-overlay" :class="desktop?'px-5':'ps-2 pe-5'">
                    <p class="text-white fw-bold" :class="desktop?'fs-1':'fs-4'">Download the App</p>
                    <p class="text-white"  :class="desktop?'':'small w-75 mb-1'">Make meals more accessible on your fingertips</p>
                    <div class="d-flex mt-2">
                        <a href="" class="me-1" :class="desktop?'btn':''">
                            <img src="@/assets/images/google.png" alt="Get on google play" :height="desktop?'':24">
                        </a>
                        <a href="" :class="desktop?'btn':''">
                            <img src="@/assets/images/apple.png" alt="Get on apple store" :height="desktop?'':24">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-6">
                <img src="@/assets/images/Group_68.png" alt="Where To Eat" class="card-img" :height="desktop?'':250">
            </div>
            <div class="col-md-4">
                <p class="fw-bold fs-1">Looking for Where To Eat?</p>
                <p class="text-secondary mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <router-link to="/resturants" class="btn text--orange">
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
                <img src="@/assets/images/Group_71.png" alt="Food Business" class="card-img" :height="desktop?'':250">
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-6">
                <img src="@/assets/images/Group_73.png" alt="Delivery Partner" class="card-img" :height="desktop?'':250">
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
import Alert from '../components/Alert.vue'
import BrowseCard from '../components/BrowseCard.vue'
import NewResturants from '../components/NewResturants.vue';
export default {
    name: "HomePage",
    inject: ["mq"],
    data() {
        return {
            newProviders: [],
            recommended: [],
            message: null,
            success: null,
            currentPlace: null
        };
    },
    methods:{
        setPlace(place){
            this.currentPlace = place;
            console.log(place);
            //return place;
        },
        getProvider(){ 
            if(this.currentPlace == null){
                this.message = "Address cannot be empty"
            }
            else{
                var lat = this.currentPlace.geometry.location.lat();
                var lng =  this.currentPlace.geometry.location.lng();
                var addr = this.currentPlace.formatted_address;
                this.$store.commit('store_location', {lng,lat,addr});
                console.log(lat, lng, addr);
               this.$router.push('/home')
            }
        }
    },
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
    components: { BrowseCard, NewResturants,Alert },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'https://api.nippyeats.com/v1/foodies/providers',
            headers: { }
        };
        var config2 = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/featured-and-recommended`,
            headers: { }
        };

        this.axios(config)
        .then(response => {
            let data = response.data.data.data
            let fooData =  data.sort(function(a, b){
                var foo = a.updatedAt;
                var bar = b.updatedAt;
                return new Date( bar ) - new Date( foo )
            }).slice(0,6);
            this.newProviders = fooData;
        })

        this.axios(config2)
        .then((response) => {
            this.recommended = response.data.data.recommended
        });
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
    .hero-img{
        background-image: url("../assets/images/Rectangle_1.png");
        background-color: hsla(0, 0%, 0%, 0.55);
        height: 250px;
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
            height: 450px;
        } 
    }
</style>