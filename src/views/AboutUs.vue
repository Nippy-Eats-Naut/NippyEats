<template>
    <div class="container mb-5">
        <div :class="desktop?'my-5':'my-3'">
            <p class="h1 fw-bold text-center">About Us</p>
        </div>
        <div class="mb-4 position-relative" v-if="desktop">   
            <div>
                <img src="@/assets/images/Group_196.png" class="rounded img-fluid">
            </div>
            <div class="px-5 py-4 bg--hero">
                <p class="text-white fw-bold" :class="desktop?'h1':'h4'">WHO WE ARE</p>
                <p class="text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. 
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <router-link to="/what-we-do" class="rounded-circle btn btn-primary float-end">
                    <i class="bi bi-arrow-right-short"></i>
                </router-link>
            </div>
        </div>
        <div class="px-5 py-4 " v-else style="background: rgba(6, 6, 16, 1);">
            <p class="text-white">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet. 
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
            <router-link to="/what-we-do" class="rounded-circle btn-primary  btn">
                <i class="bi bi-arrow-right-short"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutUs',
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
}
</script>