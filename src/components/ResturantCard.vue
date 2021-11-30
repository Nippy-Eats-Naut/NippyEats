<template>
    <div>
        <div v-if="providers.length ==0">
            <div class="row hr-scroll">
                <div v-for="n,index in 4" :key="index" class="col-md-3 col-6 mb-3 card border-0 px-2">
                    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row hr-scroll" :class="$route.path =='/search' || $route.path =='/resturants/all'? 'flex-wrap':'flex-nowrap'">
                <div v-for="provider,index in providers" :key="index" class="col-md-3 col-6 mb-3 card border-0 px-2">
                    <div class="card-img-overlay">
                        <button class="bg--grey btn rounded-circle" @click="Fav(provider.id)">
                            <i class="bi bi-heart-fill text-white"></i>
                        </button>
                    </div>
                    <router-link :to="`/resturant/${provider.id}`" class="text-decoration-none text-dark">
                        <div class="image-div">
                            <img :src="provider.logo != null ? provider.logo.fileUrl : ''" class="card-img" height="172">
                        </div>
                        <div class="d-flex justify-content-between py-2 card-body px-1">
                            <div>
                                <p class="card-title fw-bold">{{provider.name}}</p>
                                <p class="card-text small text-secondary">N{{provider.orderInformation.minimumOrderAmount}} Delivery Fee <i class="bi bi-dot"></i>{{provider.orderInformation.averageFoodTimes}}</p>
                            </div>
                            <div>
                                <p class="small d-flex"><i class="bi bi-star-fill text--orange me-1"></i>{{provider.rating}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResturantCard',
    props: {
        providers:{
            type: Array
        },
    },
    data(){
        return{
            message: null,
            success: null
        }
    },
    inject: ['mq'],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
    },
    methods:{
        Fav(id){
            var config = {
                method: 'post',
                url: 'https://api.nippyeats.com/v1/foodies/providers/favorite',
                headers: { 
                    'Authorization': `Bearer ${localStorage.getItem('nippy.token')}`,
                    'Content-Type': 'application/json'
                },
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
<style scoped>
    .row.hr-scroll{
        flex-wrap: nowrap;
        overflow-x: auto;
    }
    p.card-text.text-secondary{
        font-size: 0.8rem;
    }
    .btn.bg--grey{
        background: rgba(1, 1, 1, 0.7);
    }
    .card-img-overlay{
        left: unset;
    }
    img.card-img{
        border-radius: 6.29213px;
    }
    @media only screen and (min-width: 768px) {
    .hr-scroll{
        all:unset;
    }
  }
</style>