<template>
    <div class="container mt-4">
        <div class="mb-5">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="fs-4 fw-bold">Popular Resturants</p>
                <router-link to="" class="text-dark small text-decoration-none">See All</router-link>
            </div>
            <ResturantCard  :providers="featured" :pag="8"/>
        </div>
        <div class="mb-3">
            <div class="d-flex justify-content-between align-items-baseline">
                <p class="fs-4 fw-bold">Recommended For You</p>
                <router-link to="" class="text-dark small text-decoration-none">See All</router-link>
            </div>
            <ResturantCard  :providers="recommended" :pag="8"/>
        </div>
    </div>
</template>
<script>
import ResturantCard from "../components/ResturantCard.vue";
export default {
    name: "Resturants",
    data(){
        return{
            featured: [],
            recommended:[]
        }
    },
    components: { ResturantCard },
    beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/providers/featured-and-recommended`,
            headers: { }
        };
        this.axios(config)
        .then((response) => {
            this.featured = response.data.data.featured
            this.recommended = response.data.data.recommended
        });
        
    }
}
</script>