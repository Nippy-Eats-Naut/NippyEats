<template>
    <div>
        <div class="row"  :class="desktop?'':'hr-scroll'">
            <div v-for="meal,index in meals.slice(0,4)" :key="index" class="col-md-3 col-6 mb-3 card border-0 px-2">
                <div class="card-img-overlay">
                     <button class="bg--grey btn rounded-circle">
                        <i class="bi bi-heart-fill text-white"></i>
                    </button>
                </div>
                <router-link :to="`/resturant/${meal.id}`" class="text-decoration-none text-dark">
                    <div class="image-div">
                        <img :src="meal.logo != null ? meal.logo.fileUrl : ''" class="card-img" height="172">
                    </div>
                    <div class="d-flex justify-content-between py-2 card-body px-1">
                        <div>
                            <p class="card-title fw-bold">{{meal.name}}</p>
                            <p class="card-text small text-secondary">N{{meal.orderInformation.minimumOrderAmount}} Delivery Fee <i class="bi bi-dot"></i>{{meal.orderInformation.averageFoodTimes}}</p>
                        </div>
                        <div>
                            <p class="small d-flex"><i class="bi bi-star-fill text--orange me-1"></i>{{meal.rating}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RecommendationCard',
    props: {
        meals:{
            type: Array
        }
    },
    inject: ['mq'],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
    },
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
</style>