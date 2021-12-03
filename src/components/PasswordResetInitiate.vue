<template>
    <div>
        <!-- <div :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'px--16'">
            <div class=""> -->
                <!-- <Alert :message="message" category="alert" :success="success"/> -->
                <p class="fw-bold fs-4">Enter your email</p>
                <div class="mb-3">
                    <input type="email" placeholder="email" class="form-control"  :value="email" @input="$emit('update:email', $event.target.value)">
                </div>
            <!-- </div>
        </div> -->
    </div>
</template>
<script>
// import Alert from "../components/Alert.vue";
export default {
    name: "PasswordInitiate",
    // inject: ["mq"],
    props:{
        email: String
    },
    emits: ['update:email'],
    // data() {
    //     return {
    //         data: {
    //             email: null,
    //         },
    //         message: null,
    //         success: null
    //     };
    // },
    methods: {
        goBack() {
            window.history.back();
        }
    }
        // },
        // Send() {
        //     if (!this.data.email) {
        //         this.success = false;
        //         this.message = "Field cannot be empty";
        //     }
        //     else if (!this.validEmail(this.data.email)) {
        //         this.errors.push("Valid email required.");
        //     }
        //     else {
        //         this.loading = true
        //         var data = this.data
        //         this.$store.dispatch("auth/InitiatePassword", data)
        //         .then(
        //             (error) => {
        //                 this.loading = false;
        //                 this.message = error.response.data.message;
        //                 this.success = error.response.data.success;
        //             }
        //         );
        //     }
        // },
        // validEmail: function (email) {
        //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(email);
        // },
    // },
    // components: { Alert }
}
</script>