<template>
    <div class="container">
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? 'pt-3 pb-5' : 'p-5'">
            <button class="btn text--orange" @click="goBack">
                <i class="bi bi-arrow-left"></i> Back
            </button>
            <div class="text-center">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" class="img-fluid"></div>
            </div>
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'px--16'">
            <div class="">
                <Alert :message="message" category="alert" :success="success"/>
                <p class="fw-bold fs-4">Enter verification code</p>
                <div class="mb-3">
                    <input type="text" placeholder="code" class="form-control" v-model="data.code">
                </div>
                <div class="mb-4">
                    <button class="btn bg--orange btn-lg w-100 text-white" @click="Verify">Verify</button>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <p>Already have an account? </p>
                    <router-link to="/login" class="text--orange ms-1"> Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from "../components/Alert.vue";
export default {
    name: "VerifySignUp",
    inject: ["mq"],
    data() {
        return {
            data: {
                code: null,
            },
            message: null,
            success: null
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
        Verify() {
            if (!this.data.code) {
                this.errors.push("Field cannot be empty");
            }
            else {
                var config = {
                    method: "post",
                    url: "https://api.nippyeats.com/v1/foodies/signup/verify",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(this.data)
                };
                this.axios(config)
                    .then((response) => {
                    this.success = response.data.success;
                    localStorage.setItem("nippy.user", JSON.stringify(response.data.data.foodie));
                    localStorage.setItem("nippy.token", response.data.data.authorization.token);
                    if (localStorage.getItem("nippy.token") != null) {
                        this.$emit("loggedIn");
                        if (this.$route.query.redirect != null) {
                            this.$router.push(this.$route.query.redirect);
                        }
                        else {
                            this.$router.push("/home");
                        }
                    }
                })
                    .catch(err => {
                    this.message = err.response.data.message;
                });
            }
        },
    },
    components: { Alert }
}
</script>