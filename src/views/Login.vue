<template>
    <div class="container">
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? 'pt-3 pb-5' : 'p-5'">
            <button class="btn text--orange">
                <i class="bi bi-arrow-left"></i> Back
            </button>
            <div class="text-center">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'img-fluid'" height="40">
            </div>
        </div>
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'px--16'">
            <div class="">
                <p class="fw-bold fs-4">Access Your Account</p>
                <div class="mb-3">
                    <input type="email" placeholder="Email Address or Phone number" class="form-control" v-model="data.email">
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="Password" class="form-control" v-model="data.password">
                </div>
                <div class="mb-4 d-flex justify-content-between align-items-baseline">
                    <div class="form-check">
                        <label class="form-check-label text-dark" for="remember_me">
                            Remember me
                        </label>
                        <input class="form-check-input"  type="checkbox" name="remember_me" id="remember_me" value="Remeber me">
                    </div>
                    <router-link to="" class="text--orange text-decoration-underline">Forgot Password</router-link>
                </div>
                <div class="mb-4">
                    <button class="btn bg--orange btn-lg w-100 text-white" @click="Login">Login</button>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <p>Don't have an account? </p>
                    <router-link to="/signup" class="text--orange ms-1 text-decoration-underline"> Sign Up</router-link>
                </div>
            </div>
        </div>
        <Alert :errors="errors"/>
    </div>
</template>
<script>
import Alert from "../components/Alert.vue";
export default {
    name: "Login",
    inject: ["mq"],
    data() {
        return {
            data: {
                email: null,
                password: null
            },
            errors: []
        };
    },
    methods: {
        Login() {
            if (!this.data.email || !this.data.password) {
                this.errors.push("Email and password cannot be empty");
            }
            else if (!this.validEmail(this.data.email)) {
                this.errors.push("Valid email required.");
            }
            else {
                var config = {
                    method: "post",
                    url: "{{base_url}}/login",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: this.data
                };
                this.axios.get(config).then((response) => {
                    console.log(response.data);
                });
            }
            setTimeout(() => {
                this.errors = [];
            }, 5000);
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
    components: { Alert }
}
</script>
<style scoped>
    
</style>