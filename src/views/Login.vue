<template>
    <div class="container">
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? 'pt-3 pb-5' : 'p-5'">
            <button class="btn text--orange" @click="goBack">
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
                    <router-link to="/password-reset" class="text--orange text-decoration-underline">Forgot Password</router-link>
                </div>
                <div class="mb-4">
                    <button class="btn btn-primary btn-lg w-100 text-white" @click="Login" :disabled="loading">
                        <span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                            role="status" aria-hidden="true"
                            ></span>Login
                    </button>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <p>Don't have an account? </p>
                    <router-link to="/signup" class="text--orange ms-1 text-decoration-underline"> Sign Up</router-link>
                </div>
            </div>
        </div>
        <Alert :errors="errors" category="toast"/>
    </div>
</template>
<script>
import Alert from "../components/Alert.vue";
import {mapGetters} from 'vuex'
export default {
    name: "Login",
    inject: ["mq"],
    data() {
        return {
            loading: false,
            data: {
                email: null,
                password: null
            },
            errors: []
        };
    },
    computed: {
        ...mapGetters('auth',['loggedIn']),
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/home");
        }
    },
    methods: {
        goBack(){
            window.history.back()
        },
        Login(e) {
            e.preventDefault()
            if (!this.data.email || !this.data.password) {
                this.errors.push("Email and password cannot be empty");
            }
            else if (!this.validEmail(this.data.email)) {
                this.errors.push("Valid email required.");
            }
            else {
                this.loading = true
                var data = this.data
                this.$store.dispatch("auth/login", data)
                .then(() => {
                    this.$router.push("/home");
                },
                    (error) => {
                        this.loading = false;
                        this.errors.push(error.response.data.message)
                    }
                );
            }
            setTimeout(() => {
                this.errors = [];
            }, 10000);
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
    components: { Alert },
}
</script>
<style scoped>
    
</style>