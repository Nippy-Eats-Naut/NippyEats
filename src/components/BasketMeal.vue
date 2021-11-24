<template>
    <div class="border border-1 border-dark rounded d-flex px-1 py-1 mb-3" v-for="meal,index in meals" :key="index" >
        <div class="me-1">
            <button class="btn btn-sm pe-1">
                <i class="bi bi-x text-dark"></i>
            </button>
        </div>
        <div class="me-1">
            <img src="@/assets/images/dummyImg/Rectangle_24.png" class="rounded" height="60">
        </div>
        <div class="me-1">
            <p class="small mb-1">Pap and Akara</p>
            <p class="small text-secondary">Jevik Resturant</p>
        </div>
        <div class="me-1">
            <div class="input-group">
                <button class="btn btn-dark btn-sm border-0">-</button>
                <input class="quantity-input" type="text" v-model="quantity">
                <button class="btn btn-dark btn-sm border-0">+</button>
            </div>
        </div>
        <div class="">
            <p class="small fw-bold">N3,000</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BasketMeal',
    props:{
        meals: {
            type: Number
        }
    },
    data(){
        return{
            quantity: 1
        }
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