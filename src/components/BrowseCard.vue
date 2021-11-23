<template>
    <div class="card border-0">
        <div class="row">
            <div v-for="meal,index in meals" :key="index" class="col-md-4 col-6 card border-0 px-3">
                    <img src="@/assets/images/dummyImg/Rectangle_26.png" class="card-img rounded-0" :height="desktop? 220:156">
                <router-link to="/category/id" class="card-img-overlay btn-overlay btn py-2 mb-3 mx-5" :class="desktop?'px-4':'px-1'">
                        Noodles<i class="bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
        <div class="card-img-overlay d-flex justify-content-between align-items-center" v-if="desktop">
            <button class="btn bg-light text--orange rounded-circle" @click="scroll_left">
                <i class="bi bi-arrow-left"></i>
            </button>
            <button class="btn bg-light text--orange rounded-circle" @click="scroll_right">
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BrowseCard',
    inject: ["mq"],
    props: {
        meals:{
            type: Number
        }
    },
    methods: {
        scroll_left() {
        let content = document.querySelector(".row");
        content.scrollLeft -= 50;
        },
        scroll_right() {
        let content = document.querySelector(".row");
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