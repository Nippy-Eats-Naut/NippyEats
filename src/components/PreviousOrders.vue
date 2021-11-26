<template>
    <div>
        <div v-if="data.length == 0" class="--empty w-100">
            <p class="text-secondary">
                <i class="bi bi-cliboard-x fs-3"></i>
            </p>
            <p class="text-secondary">Nothing here yet</p>
            <router-link to="/home" class="btn text--orange cs">
                <i class="bi bi-arrow-left"></i>
                Continue Shopping
            </router-link>
        </div>
        <div v-else v-for="foo, index in data" :key="index" class="px-3 py-2 border border-dark mb-4 rounded">
            <div class="d-flex justify-content-around mb-3 align-items-start">
                <div>
                    <img :src="foo.img.fileUrl" alt="" :height="desktop?96:72" class="rounded">
                </div>
                <div>
                    <p class="mb-1 h6">{{foo.title}}</p>
                    <p class="small text-secondary mb-2">Provider name</p>
                    <p class="mb-0 fw-bold">{{foo.currency}} {{foo.price}}</p>
                </div>
                <div>
                    <p class="mb-1">Order Number</p>
                    <p class="mb-1 text-center">123456</p>
                </div>
                <div v-if="desktop">
                    <button class="btn text-white bg-danger">Delete Order</button>
                </div>
            </div>
            <div v-if="!desktop">
                <button class="btn text-white bg-danger w-100">Delete Order</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PreviousOrder',
    props:{
        data:{
            type: Array
        }
    },
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    }
}
</script>