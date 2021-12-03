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
        <div v-else v-for="menu, index in data" :key="index" class="p-4 d-flex justify-content-between border border-dark mb-4 rounded align-items-center">
            <div class="d-flex">
                <div class="me-3">
                    <img :src="menu.img.fileUrl" alt="" :height="desktop?96:72" class="rounded">
                </div>
                <div>
                    <p class="mb-1 fw-bold">{{menu.title}}</p>
                    <p class="small text-secondary">{{menu.description}}</p>
                    <p class="mb-0">{{menu.currency}} {{parseFloat(menu.price.toString())}}</p>
                </div>
            </div>
            <div>
                <button class="btn text-white rounded-circle bg-dark btn-sm" @click="remove(id)">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import authHeader from '../services/auth-header';
export default {
    name: 'FavoruiteFood',
    props: {
        data:{type: Array}
    },
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
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