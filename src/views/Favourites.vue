<template>
    <div class="container mt-5">
        <div>
            <p class="fw-bold fs-4">Favourites</p>
        </div>
        <Alert :message="message" category="alert" :success="success"/>
        <div class="d-flex justify-content-center mb-5">
            <button class="btn text-center w-100 py-3 rounded-0" @click="SwitchTab('Resturants')" :class="tab == 'Resturants'? 'bg-dark text-white':'border border-1 border-dark text-dark'">
                Resturants
            </button>
            <button class="btn text-center w-100 py-3 rounded-0"  @click="SwitchTab('Food')" :class="tab == 'Food'? 'bg-dark text-white':'border border-1 border-dark text-dark'">
                Food and Cuisines
            </button>
        </div>
        <div>
            <FavouriteResturants :data="providers" v-show="tab=='Resturants'"/>
            <FavouriteFood  :data="menus" v-show="tab=='Food'"/>
        </div>
    </div>
</template>
<script>
import FavouriteResturants from "../components/FavouriteResturants.vue";
import FavouriteFood from "../components/FavouriteFood.vue";
import Alert from "../components/Alert.vue";
import {mapGetters} from 'vuex'
export default {
    name: "Favourites",
    data() {
        return {
            tab: "Resturants",
            providers: [],
            menus: []
        };
    },
    methods: {
        SwitchTab(name) {
            this.tab = name;
        }
    },
    computed:{
        ...mapGetters([
            'message', 'success'
        ])
    },
    components: { FavouriteResturants, FavouriteFood, Alert },
    beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/`,
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('nippy.token')}`, 
                'Content-Type': 'application/json'
            },
        };

        this.axios(config)
        .then(response => {
            let _data = response.data.data.favoriteProviders;
            console.log(_data)
            _data.filter(a => {
                var config2 = {
                    method: 'get',
                    url: `https://api.nippyeats.com/v1/foodies/providers/${a}`,
                    headers: { }
                };
                this.axios(config2)
                .then(response => {
                    console.log(response.data.data)
                    this.providers.push(response.data.data)
                })
            })
        })
        .catch(function (error) {
            console.log(error);
        });
        
            console.log(this.providers)
    }
}
</script>