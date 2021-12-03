<template>
    <div>
        <div v-if="data.length == 0" class="--empty w-100">
            <p class="text-secondary">
                <i class="bi bi-heart-half fs-3"></i>
            </p>
            <p class="text-secondary">Nothing here yet</p>
            <router-link to="/home" class="btn text--orange cs">
                <i class="bi bi-arrow-left"></i>
                Continue Shopping
            </router-link>
        </div>
        <div v-else v-for="_data, index in data" :key="index" class="p-4 d-flex justify-content-between border border-dark mb-4 rounded align-items-center">
            <div class="d-flex">
                <div class="me-4">
                    <img :src="_data.logo.fileUrl" alt="" :height="desktop?96:72" class="rounded">
                </div>
                <div>
                    <p class="mb-1 fw-bold">{{_data.name}}</p>
                    <div class="d-flex align-items-center">
                        <star-rating class="me-2"
                        :rating="_data.rating" :read-only="true" 
                        :increment="0.5" :star-size="20">
                        </star-rating>()
                    </div>
                    <p class="mb-0">
                        <i class="bi bi-geo-alt-fill me-1"></i>
                        {{_data.contactInformation.address}}
                    </p>
                </div>
            </div>
            <div>
                <button class="btn text-white rounded-circle bg-dark btn-sm" @click="remove(_data.id)">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import StarRating from 'vue-star-rating'
import authHeader from '../services/auth-header';
export default {
    name: 'FavoruiteResturants',
    props: {
        data:{type: Array}
    },
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
    components: { StarRating },
    methods:{
        remove(id){
            var config = {
                method: 'post',
                url: 'https://api.nippyeats.com/v1/foodies/providers/favorite',
                headers: authHeader(),
                data : JSON.stringify({"providerId": id})
            };

            this.axios(config)
            .then(response => {
                let msg = response.data.message
                let succ = response.data.success
                this.$store.commit('add_alert', {msg,succ})
            })
        }
    }
}
</script>