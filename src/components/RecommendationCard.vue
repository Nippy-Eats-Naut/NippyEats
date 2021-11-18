<template>
    <div>
        <div class="row">
            <div v-for="meal,index in meals" :key="index" class="col-md-4 card border-0 px-3">
                    <img src="@/assets/images/dummyImg/Rectangle_26.png" class="card-img" width="224" height="176">
                <router-link to="#" class="card-img-overlay btn-overlay btn py-2 px-4 mb-3 mx-5">
                        Noodles<i class="bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
        <div class="card-overlay">
            <button class="btn bg-light text--orange" @click="scroll_left">
                <i class="bi bi-arrow-left"></i>
            </button>
            <button class="btn bg-light text--orange" @click="scroll_right">
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RecommendationCard',
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
    }
}
</script>
<style scoped>
    .card-img-overlay.btn-overlay{
        display: flex;
        justify-content: space-between;
        background: rgba(255, 255, 255, 1);
        top: unset;
        color: black;
        text-decoration: none;
        border-radius: 5px;
    }
    .row{
        overflow-x: auto;
        flex-wrap: nowrap;
    }
</style>