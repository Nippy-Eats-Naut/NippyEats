<template>
    <div class="card border-0">
        <div class="row --nr">
            <div v-for="res,index in resturants" :key="index" class="col-md-3 col-6 card --shadow border-0 px-2" :title="res.name">
                <div class="card-img-overlay --a">
                     <button class="bg--grey btn rounded-circle">
                        <i class="bi bi-heart-fill text-white"></i>
                    </button>
                </div>
                <router-link :to="`/resturant/${res.id}`" class="text-decoration-none text-dark">
                    <div class="image-div">
                        <img :src="res.logo != null ? res.logo.fileUrl : ''" class="card-img" height="172">
                    </div>
                    <div class="d-flex justify-content-between p-1 card-body">
                        <div>
                            <p class="card-title mb-0 fw-bold text-truncate">{{res.name}}</p>
                        </div>
                        <div>
                            <p class="small mb-0 d-flex"><i class="bi bi-star-fill text--orange me-1"></i> {{res.rating}}</p>
                        </div>
                    </div>
                    <p class="card-text p-1 mb-0 small text-secondary" v-if="currentPlace">N{{deliveryFee(res.longitude, res.latitude)}} Delivery Fee <i class="bi bi-dot"></i>{{res.orderInformation.averageFoodTimes}}</p>
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
import AppService from "../services/app.service"
import {mapGetters} from 'vuex'
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
        },

        deliveryFee(long, lat){
            const mk1 = {
                longitude: this.currentPlace.longitude,
                latitude: this.currentPlace.latitude
            }

            const mk2 = {
                longitude: long,
                latitude: lat
            }

            var Fee = AppService.deliveryFee(mk1, mk2)

            return Fee
        }
    },
    computed:{
        ...mapGetters([
            'currentPlace', 
            // 'latitude'
        ]),
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
    },

    mounted(){
        this.deliveryFee
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
    .--shadow:hover {
        box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    }
    @media only screen and (min-width: 768px) {
        .row{
            overflow-x: hidden;
        }
    }
</style>