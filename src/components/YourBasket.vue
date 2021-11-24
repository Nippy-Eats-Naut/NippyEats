<template>
    <p class="h5">Jevenik Resturant</p>
    <div class="border border-1 border-dark rounded d-flex p-3 mb-3 justify-content-evenly" v-for="meal,index in meals" :key="index" >
        <div class="me-3 d-flex align-items-center">
            <button class="btn bg-dark rounded-circle">
                <i class="bi bi-x text-light"></i>
            </button>
        </div>
        <div class="me-3">
            <img src="@/assets/images/dummyImg/Rectangle_24.png" class="rounded" :height="desktop?120:84">
        </div>
        <div class="me-3">
            <p class="mb-1 h5">Pap and Akara</p>
            <p class="text-secondary">Jevik Resturant</p>
            <div class="input-group" v-if="!desktop">
                <button class="btn btn-dark btn-sm border-0">-</button>
                <input class="quantity-input" type="text" v-model="quantity">
                <button class="btn btn-dark btn-sm border-0">+</button>
            </div>
        </div>
        <div class="me-3" v-if="desktop">
            <div class="input-group">
                <button class="btn btn-dark btn-sm border-0">-</button>
                <input class="quantity-input" type="text" v-model="quantity">
                <button class="btn btn-dark btn-sm border-0">+</button>
            </div>
        </div>
        <div class="">
            <p class="fw-bold">N3,000</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'YourBasket',
    props:{
        meals: {
            type: Object
        }
    },
    data(){
        return{
            quantity: 1
        }
    },
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        },
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