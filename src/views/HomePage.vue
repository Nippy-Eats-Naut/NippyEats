<template>
    <div>

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
        <div class="card border-0">
            <img class="card-img" src="@/assets/images/Mask_Group.png">
            <div class="card-img-overlay px-5">
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
    <div>

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
    .card-img{
        z-index: 1
    }
    .card-img-overlay{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(252, 76, 1, 1);
    }
</style>