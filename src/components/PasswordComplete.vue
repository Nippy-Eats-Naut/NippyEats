<template>
    <div>
        <!-- <div :class="mq.current === 'xs' || mq.current === 'sm' ? 'pt-3 pb-5' : 'p-5'">
            <button class="btn text--orange" @click="goBack">
                <i class="bi bi-arrow-left"></i> Back
            </button>
            <div class="text-center">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" class="img-fluid"></div>
            </div>
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'px--16'">
            <div class=""> -->
                <!-- <Alert :message="message" category="alert" :success="success"/> -->
                <p class="fw-bold fs-4">Enter verification code and new password</p>
                <div class="mb-3">
                    <input type="text" placeholder="code" class="form-control"  :value="code" @input="$emit('update:code', $event.target.value)">
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="password" class="form-control" :value="password" @input="$emit('update:password', $event.target.value)">
                </div>
                <!-- <div class="mb-3">
                    <a class="text--orange" @click="Resend">Didn't get the code? Resend</a>
                </div>
                <div class="mb-4">
                    <button class="btn btn-primary btn-lg w-100 text-white" @click="Finish" :disabled="loading">
                        <span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                            role="status" aria-hidden="true"
                            ></span>Finish
                    </button>
                </div> -->
            <!-- </div>
        </div> -->
    </div>
</template>
<script>
// import Alert from "../components/Alert.vue";
export default {
    name: "PasswordComplete",
    props:{
        code: String, password: String
    },
    emits: ['update:password', 'update:code'],
    // data() {
    //     return {
    //         data: {
    //             code: null,
    //             password: null
    //         },
    //         message: null,
    //         success: null
    //     };
    // },
    methods: {
        goBack() {
            window.history.back();
        },
        // Resend() {
        //     this.loading = true
        //     var data = this.emailData
        //     this.$store.dispatch("auth/InitiatePassword", data)
        //     .then(() => 
        //         (error) => {
        //             this.loading = false;
        //             this.message = error.response.data.message;
        //             this.success = error.response.data.success;
        //         }
        //     );
        // },
        // Finish() {
        //     if (!this.data.code || !this.data.password) {
        //         this.success = false;
        //         this.message = "Field cannot be empty";
        //     }
        //     else {
        //         this.loading = true
        //         var data = this.data
        //         this.$store.dispatch("auth/FinishPassword", data)
        //         .then(() => {
        //                 if (this.$route.query.redirect != null) {
        //                     this.$router.push(this.$route.query.redirect);
        //                 }
        //                 else {
        //                     this.$router.push("/home");
        //                 }
        //             },
        //             (error) => {
        //                 this.loading = false;
        //                 this.message = error.response.data.message;
        //                 this.success = error.response.data.success;
        //             }
        //         );
        //     }
        // },
    },
    // components: { Alert }
}
</script>