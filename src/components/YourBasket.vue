<template>
    <!--<p class="h5">{{meal.provider}}</p>-->
    <div class="border border-1 border-dark rounded d-flex p-3 mb-3 justify-content-evenly" v-for="meal,index in basket" :key="index" >
        <div class="me-3 d-flex align-items-center">
            <button class="btn bg-dark rounded-circle" @click="removeMenu(meal)">
                <i class="bi bi-x text-light"></i>
            </button>
        </div>
        <div class="me-3">
            <img :src="meal.img != null ? meal.img : require('@/assets/images/2logo.png')" class="rounded" :height="desktop?120:84">
        </div>
        <div class="me-3">
            <p class="mb-1 h5">{{meal.title}}</p>
            <p class="text-secondary">{{meal.provider}}</p>
            <div class="input-group" v-if="!desktop">
                <button class="btn btn-dark btn-sm border-0" @click="meal.quantity--">-</button>
                <input class="quantity-input" type="text" v-model="meal.quantity">
                <button class="btn btn-dark btn-sm border-0" @click="meal.quantity++">+</button>
            </div>
        </div>
        <div class="me-3" v-if="desktop">
            <div class="input-group">
                <button class="btn btn-dark btn-sm border-0" @click="meal.quantity--">-</button>
                <input class="quantity-input" type="text" v-model="meal.quantity">
                <button class="btn btn-dark btn-sm border-0" @click="meal.quantity++">+</button>
            </div>
        </div>
        <div class="">
            <p class="fw-bold">{{meal.currency}} {{parseFloat(meal.price.toString())}}</p>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'YourBasket',
    data(){
        return{
        }
    },
    inject: ["mq"],
    methods:{ 
        removeMenu(meal){
            this.$store.commit('REMOVE_menu', meal)
        }
    },
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
        ...mapGetters([
            'basket'
        ]),
    }
}
</script>
<style scoped>
    .quantity-input{
        border: 0px;
        background-color: #212529;
        color: white;
        font-size: small;
        width: 20px;
    }
</style>