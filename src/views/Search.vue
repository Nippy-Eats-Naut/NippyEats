<template>
    <div>
        <div class="d-flex mt-2 mx-2 align-items-baseline" :class="desktop?'px--16':''">
            <div class="input-group has-icon">
                <span class="form-control-feedback">
                    <i class="bi bi-search text-secondary opacity-25"></i>
                </span>
                <input type="text" placeholder="Search food or resturants" class="bg-light form-control rounded searchbar" v-model="search" @keyup="getSearch">
            </div>
            <a class="text--dark font-bold text-decoration-none" @click="goBack" v-if="!desktop">Cancel</a>
        </div>
        <div class="container">
            <div v-if="search == ''" class="--empty vh-100 w-100">
                <p class="text-secondary">
                    <i class="bi bi-search fs-3"></i>
                </p>
                <p class="text-secondary">Nothing here yet</p>
            </div>
            <div class="mt-3">
                <div class="mb-3">
                    <ResturantMeal title="Menu" col="col-md-4" />
                    <button class="text-dark h6 btn" @click.prevent="LoadMore(4, 'menu')">View More</button>
                </div>
                <div>
                    <ResturantCard />
                    <button class="text-dark h6 btn" @click.prevent="LoadMore(4, 'provider')">View More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ResturantMeal from "../components/ResturantMeal.vue";
import ResturantCard from "../components/ResturantCard.vue";
export default {
    name: "Search",
    inject: ["mq"],
    data() {
        return {
            search: '',
            pagMenu: 4,
            pagProvider: 4,
            data: [],
            menus: []
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
        LoadMore(n, channel) {
            channel === "menu" ? this.pagMenu += n : this.pagProvider += n;
        },
        getSearch(){
            this.menus = this.data.filter(a => {
                if (a.category == "menu") {
                    var name = a.value.name.toLowerCase().includes(this.search.toLowerCase());
                    return name;
                }
            }).slice(0, this.pagMenu);

        }
    },
    computed: {
        desktop() {
            return this.mq.current !== "xs" && this.mq.current !== "sm";
        },
        //filterMenu() {
        //},
        //filterProvider(){
        //}
    },
    beforeMount() {
        var config = {
            method: "get",
            url: "https://api.nippyeats.com/v1/foodies/explore",
            headers: {}
        };
        this.axios(config)
            .then(response => {
            this.data = response.data.data;
        });
    },
    created() {
        if (!this.desktop) {
            document.querySelector("#navbar").setAttribute("style", "display: none;");
        }
    },
    beforeUnmount() {
        if (!this.desktop) {
            document.querySelector("#navbar").setAttribute("style", "display: flex;");
        }
    },
    components: { ResturantMeal, ResturantCard }
}
</script>

<style scoped>
    .--empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .vh-100{
        height: 100vh;
    }
</style>