<template>
    <div class="card border-0">
        <div class="row --cr">
            <div v-for="rec,index in menus" :key="index" class="col-md-4 col-6 card border-0 px-3">
                    <img :src="rec.logo != null ? rec.logo.fileUrl : require('@/assets/images/2logo.png')" class="card-img rounded-0" :height="desktop? 220:156">
                <router-link :to="`/resturant/${rec.id}`" class="shadow card-img-overlay btn-overlay btn py-2 mb-3 mx-5" :class="desktop?'px-4':'px-1'">
                        <label class="text-truncate pe-2">{{rec.name}}</label><i class="bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
        <div v-if="desktop">
            <div class="card-img-overlay --left">
                <button class="shadow btn bg-light text--orange rounded-circle" @click="scroll_left">
                    <i class="bi bi-arrow-left"></i>
                </button>
            </div>
            <div class="card-img-overlay --right">
                <button class="shadow btn bg-light text--orange rounded-circle" @click="scroll_right">
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BrowseCard',
    inject: ["mq"],
    props: {
        menus:{
            type: Array
        }
    },
    methods: {
        scroll_left() {
        let content = document.querySelector(".row.--cr");
        content.scrollLeft -= 50;
        },
        scroll_right() {
        let content = document.querySelector(".row.--cr");
        content.scrollLeft += 50;
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
    .card-img-overlay.btn-overlay.btn{
        display: flex;
        justify-content: space-between;
        background: rgba(255, 255, 255, 1);
        top: unset;
        color: black;
        text-decoration: none;
        border-radius: 5px;
        font-size: small;
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