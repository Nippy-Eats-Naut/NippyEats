<template>
    <div class="container mb-5">
        <div class="my-5">
            <p class="fs-4 text-center fw-bold">Keep In Touch With Us</p>
            <p class="text-secondary text-center" :class="desktop ? 'px--16': ''">
                Do you need more information about or service or want to talk with us? 
                Reach out to us and we'll respond as soon as possible.
            </p>
        </div>
        <div class="row">
            <div class="col-md-6" v-if="desktop">
                <img src="@/assets/images/Group__73.png" class="rounded img-fluid">
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="email" placeholder="name@example.com">
                    <label for="email">Email or Phone Contact</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control h--100" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Message</label>
                </div>
                <button class="btn btn-lg w-100 bg--orange text-white">Send Message</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactUs',
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
}
</script>
<style scoped>
    .h--100{
        height: 300px;
    }
</style>