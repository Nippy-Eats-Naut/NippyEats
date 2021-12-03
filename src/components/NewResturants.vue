<template>
    <div class="card border-0">
        <div class="row --nr">
            <div v-for="res,index in resturants" :key="index" class="col-md-3 col-6 card border-0 px-2">
                <div class="card-img-overlay --a">
                     <button class="bg--grey btn rounded-circle">
                        <i class="bi bi-heart-fill text-white"></i>
                    </button>
                </div>
                <router-link :to="`/resturant/${res.id}`" class="text-decoration-none text-dark">
                    <div class="image-div">
                        <img :src="res.logo != null ? res.logo.fileUrl : ''" class="card-img" height="172">
                    </div>
                    <div class="d-flex justify-content-between py-2 card-body px-1">
                        <div>
                            <p class="card-title fw-bold">{{res.name}}</p>
                            <p class="card-text small text-secondary">N{{res.orderInformation.minimumOrderAmount}} Delivery Fee <i class="bi bi-dot"></i>{{res.orderInformation.averageFoodTimes}}</p>
                        </div>
                        <div>
                            <p class="small d-flex"><i class="bi bi-star-fill text--orange me-1"></i> {{res.rating}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-if="desktop">
            <div class="card-img-overlay --left">
                <button class="shadow btn bg-light text--orange rounded-circle" @click="scroll__left">
                    <i class="bi bi-arrow-left"></i>
                </button>
            </div>
            <div class="card-img-overlay --right">
                <button class="shadow btn bg-light text--orange rounded-circle" @click="scroll__right">
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewResturants',
    inject: ["mq"],
    props: {
        resturants:{
            type: Object
        }
    },
    methods: {
        scroll__left() {
            let content1 = document.querySelector(".--nr");
            content1.scrollLeft -= 50;
        },
        scroll__right() {
            let content1 = document.querySelector(".--nr");
            content1.scrollLeft += 50;
        }
    },
    computed:{
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    }
}
</script>
<style scoped>
    .card-img-overlay.d-flex.justify-content-between{
        padding-bottom: 33px;
    }
    p.card-text.text-secondary{
        font-size: 0.8rem;
    }
    .btn.bg--grey{
        background: rgba(1, 1, 1, 0.7);
    }
    .card-img-overlay.--a{
        left: unset;
    }
    
    .card-img-overlay.--left{
        left: 0;
        right: unset;
        top: unset;
        bottom: 50%;
    }
    .card-img-overlay.--right{
        right: 0;
        left: unset;
        top: unset;
        bottom: 50%;
    }
    .row{
        overflow-x: auto;
        flex-wrap: nowrap;
    }
    @media only screen and (min-width: 768px) {
        .row{
            overflow-x: hidden;
        }
    }
</style>