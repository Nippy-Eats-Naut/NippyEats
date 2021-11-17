<template>
    <div class="container mt-5">
        <div>
            <p class="fw-bold fs-4">Favourites</p>
        </div>
        <div class="d-flex justify-content-center mb-5">
            <button class="btn text-center w-100 py-3 rounded-0" @click="SwitchTab('Resturants')" :class="tab == 'Resturants'? 'bg-dark text-white':'border border-1 border-dark text-dark'">
                Resturants
            </button>
            <button class="btn text-center w-100 py-3 rounded-0"  @click="SwitchTab('Food')" :class="tab == 'Food'? 'bg-dark text-white':'border border-1 border-dark text-dark'">
                Food and Cuisines
            </button>
        </div>
        <div>
            <FavouriteResturants v-show="tab=='Resturants'"/>
            <FavouriteFood  v-show="tab=='Food'"/>
        </div>
    </div>
</template>
<script>
import FavouriteResturants from "../components/FavouriteResturants.vue";
import FavouriteFood from "../components/FavouriteFood.vue";
export default {
    name: "Favourites",
    data() {
        return {
            tab: "Resturants"
        };
    },
    methods: {
        SwitchTab(name) {
            this.tab = name;
        }
    },
    components: { FavouriteResturants, FavouriteFood }
}
</script>