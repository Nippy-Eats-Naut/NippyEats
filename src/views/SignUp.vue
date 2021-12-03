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
                <Alert :message="message" category="alert" :success="success" :link="true"/>
                <p class="fw-bold fs-4">Create An Account</p>
                <div class="mb-3 row">
                    <div class="col-md-6" :class="mq.current === 'xs' || mq.current === 'sm' ? 'mb-3' : ''">
                        <input type="text" placeholder="First Name" class="form-control" v-model="data.firstname">
                    </div>
                    <div class="col-md-6">
                        <input type="text" placeholder="Last Name" class="form-control" v-model="data.lastname">
                    </div>
                </div>
                <div class="mb-3">
                    <input type="email" placeholder="Email Address" class="form-control" v-model="data.email">
                </div>
                <div class="mb-3">
                    <input type="text" placeholder="Location" class="form-control" v-model="data.location">
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="Password" class="form-control" v-model="data.password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" value="" id="flexCheck" v-model="tncbx">
                    <label class="form-check-label" for="flexCheck">I hearby acknowlege and agree that I have read and understood 
                        <router-link to="" class="text--orange">Nippyeat's Privacy Policy</router-link> and
                        <router-link to="/terms-conditions" class="text--orange">Terms and condition</router-link>
                    </label>
                </div>
                <div class="mb-4">
                    <button class="btn btn-primary btn-lg w-100 text-white" @click="SignUp" :disabled="loading">
                        <span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                            role="status" aria-hidden="true"
                            ></span>SignUp
                    </button>
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
import {mapGetters} from 'vuex'
export default {
    name: "SignUp",
    inject: ["mq"],
    data() {
        return {
            loading: false,
            data: {
                firstname: null,
                lastname: null,
                email: null,
                password: null,
                // referralcode: null,
                // phone: null,
                location: null
            },
            message: null,
            tncbx: null,
            success: null
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
        SignUp() {
            if (!this.data.email || !this.data.password || !this.data.firstname || !this.data.lastname || !this.data.location) {
                this.message = "Field cannot be empty";
                this.success = false;
            }
            else if (!this.validEmail(this.data.email)) {
                this.message = "Valid email required.";
                this.success = false;
            }
            else if (!this.tncbx) {
                this.message = "Agreement needs to be checked";
                this.success = false;
            }
            else {
                this.loading = true
                var _data = this.data
                this.$store.dispatch("auth/register", _data)
                .then(
                    (data) => {
                        this.message = data.message;
                        this.success = data.success;
                        this.loading = false;
                    },
                    (error) => {
                    this.message = error.response.data.message;
                    this.success = error.response.data.success;
                    this.loading = false;
                    }
                );
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
    computed: {
        ...mapGetters('auth',['loggedIn']),
    },
    mounted() {
        if (this.loggedIn) {
        this.$router.push("/home");
        }
    },
    components: { Alert }
}
</script>
<style scoped>
    
</style>