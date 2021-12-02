<template>
    <div class="mt-5 container">
        <div>
            <p class="h3 mb-2">{{allMenus.title}}</p>
            <p>{{allMenus.menus.length}} Items</p>
        </div>
        <div class="mb-5">
            <ResturantMeal :link="false" :menus="allMenus" col="col-md-4" />
        </div>
    </div>
</template>
<script>
import ResturantMeal from "../components/ResturantMeal.vue";
export default {
    name: "FoodCategory",
    data() {
        return {
            menus: [],
        };
    },
    computed:{
        allMenus(){
            let _menus = this.menus.find(menu=> {
                return menu.slug == this.$route.params.slug
            });
            return _menus
        }
    },
    components: { ResturantMeal },
    beforeMount(){
        var config3 = {
            method: "get",
            url: `https://api.nippyeats.com/v1/foodies/providers/${this.$route.params.id}/categories`,
            headers: { }
        };

        this.axios(config3)
            .then(response => {
                this.menus = response.data.data
        });  
    }
}
</script>