<template>
    <div>
        <div class="d-flex mt-2 mx-2 align-items-baseline" :class="desktop?'px--16':''">
            <div class="input-group has-icon me-3">
                <span class="form-control-feedback">
                    <i class="bi bi-search text-secondary opacity-25"></i>
                </span>
                <input type="text" placeholder="Search food or resturants" class="bg-light form-control rounded searchbar" v-model="search" @keyup="getSearch">
            </div>
            <a class="h6 text-dark text-decoration-none" @click="goBack" v-if="!desktop">Cancel</a>
        </div>
        <div class="container">
            <div v-if="search == ''" class="--empty vh-100 w-100">
                <p class="text-secondary">
                    <i class="bi bi-search fs-3"></i>
                </p>
                <p class="text-secondary">Nothing here yet</p>
            </div>
            <div class="my-3">
                <div>
                    <ResturantCard :providers="result"/>
                    <div class="d-flex justify-content-center">
                        <button class="btn-primary btn" @click.prevent="pagProvider += 4">View More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ResturantCard from "../components/ResturantCard.vue";
export default {
    name: "Search",
    inject: ["mq"],
    data() {
        return {
            search: '',
            pagProvider: 4,
            providers:[],
            result:[]
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
        getSearch(){
            this.result = this.providers.filter(a => {
                var name = a.name.toLowerCase().includes(this.search.toLowerCase());
                return name;
            }).slice(0, this.pagProvider);
        }
    },
    computed: {
        desktop() {
            return this.mq.current !== "xs" && this.mq.current !== "sm";
        }
    },
    beforeMount() {
        var config = {
            method: "get",
            url: "https://api.nippyeats.com/v1/foodies/providers",
            headers: {}
        };
        this.axios(config)
            .then(response => {
            this.providers = response.data.data.data;
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
    components: { ResturantCard }
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