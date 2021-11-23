<template>
    <div class="card border-0">
        <div class="row --nr">
            <div v-for="res,index in resturants" :key="index" class="col-md-3 col-6 card border-0 px-2">
                <div class="card-img-overlay --a">
                     <button class="bg--grey btn rounded-circle">
                        <i class="bi bi-heart-fill text-white"></i>
                    </button>
                </div>
                <router-link to="" class="text-decoration-none text-dark">
                    <div class="image-div">
                        <img src="@/assets/images/dummyImg/Rectangle_29.png" class="card-img" height="172">
                    </div>
                    <div class="d-flex justify-content-between py-2 card-body px-1">
                        <div>
                            <p class="card-title fw-bold">Cloud Kitchen</p>
                            <p class="card-text small text-secondary">N300 Delivery Fee <i class="bi bi-dot"></i> 30-40 min</p>
                        </div>
                        <div>
                            <p class="small d-flex"><i class="bi bi-star-fill text--orange me-1"></i> 4.5</p>
                        </div>
                    </div>
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
    name: 'NewResturants',
    inject: ["mq"],
    props: {
        resturants:{
            type: Object
        }
    },
    methods: {
        scroll_left() {
        let content = document.querySelector(".row.--nr");
        content.scrollLeft -= 50;
        },
        scroll_right() {
        let content = document.querySelector(".row.--nr");
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
    p.card-text.text-secondary{
        font-size: 0.8rem;
    }
    .btn.bg--grey{
        background: rgba(1, 1, 1, 0.7);
    }
    .card-img-overlay.--a{
        left: unset;
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