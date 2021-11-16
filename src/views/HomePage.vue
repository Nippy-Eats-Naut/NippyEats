<template>
    <div class="card border-0">
        <div title="meal image" class="card-img hero-img"></div>
        <div class="card-img-overlay px-5">
            <p class="fs-1 fw-bold text-white">Eat anywhere !</p>
            <div class="p-2 w-50 --address">
                <div class="input-group has-icon rounded">
                    <span class="form-control-feedback">
                        <i class="bi bi-geo-alt-fill text-white"></i>
                    </span>
                    <input type="text" class="form-control border-0 rounded bg-transparent w-50" placeholder="Where are you at?">
                    <button class="btn text-white bg--orange">Find Food</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container mb-5">
        <p class="fs-4 text-center fw-bold">Our Top Recommendatons</p>
        <p class="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <div class="mt-3">
            <RecommendationCard :meals="meals" />
        </div>
    </div>
    <div class="container mb-5">
        <p class="fs-4 text-center fw-bold">New On NippyEats</p>
        <NewResturants :resturants="resturants" />
    </div>
    <div class="container mb-5">
        <div class="card border-0 rounded-3">
            <img class="card-img download" src="@/assets/images/Mask_Group.png">
            <div class="card-img-overlay download px-5">
                <p class="text-white fw-bold fs-1">Download the App</p>
                <p class="text-white">Make meals more accessible on your fingertips</p>
                <div class="d-flex mt-3">
                    <a href="" class="me-3">
                        <img src="@/assets/images/google.png" alt="Get on google play" width="100" height="30">
                    </a>
                    <a href="">
                        <img src="@/assets/images/apple.png" alt="Get on apple store" width="100" height="30">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mb-4">
            <div class="col-md-6">
                <img src="@/assets/images/Group_68.png" alt="Where To Eat">
            </div>
            <div class="col-md-4">
                <p class="fw-bold fs-1">Looking for Where To Eat?</p>
                <p class="text-secondary mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <router-link to="" class="btn text--orange">
                    Find Resturant <i class="ms-2 bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-4">
                <p class="fw-bold fs-1">List Your Food Business</p>
                <p class="text-secondary mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <router-link to="/food-lisiting" class="btn text--orange">
                    Enlist Resturant <i class="ms-2 bi bi-arrow-right"></i>
                </router-link>
            </div>
            <div class="col-md-6">
                <img src="@/assets/images/Group_71.png" alt="Food Business">
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-6">
                <img src="@/assets/images/Group_73.png" alt="Delivery Partner">
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
import RecommendationCard from '../components/RecommendationCard.vue'
import NewResturants from '../components/NewResturants.vue';
export default {
    name: "HomePage",
    data() {
        return {};
    },
    computed: {
        meals() {
            return data[0].meals;
        },
        resturants() {
            return data[1].resturants;
        },
    },
    components: { RecommendationCard, NewResturants }
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
    }
    .hero-img{
        background-image: url("../assets/images/Rectangle_1.png");
        background-color: hsla(0, 0%, 0%, 0.55);
        height: 100vh;
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
</style>