<template>
    <div class="container">
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? 'pt-3 pb-5' : 'p-5'">
            <button class="btn text--orange">
                <i class="bi bi-arrow-left"></i> Back
            </button>
            <div class="text-center">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" class="img-fluid"></div>
            </div>
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'px--16'">
            <div class="">
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
                <div class="mb-4 d-flex align-items-baseline">
                    <input type="checkbox" class="me-2" v-model="tncbx">
                    <p>I hearby acknowlege and agree that I have read and understood 
                        <router-link to="" class="text--orange">Nippyeat's Privacy Policy</router-link> and
                        <router-link to="/terms-conditions" class="text--orange">Terms and condition</router-link>
                    </p>
                </div>
                <div class="mb-4">
                    <button class="btn bg--orange btn-lg w-100 text-white" @click="SignUp">SignUp</button>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <p>Already have an account? </p>
                    <router-link to="/login" class="text--orange ms-1"> Login</router-link>
                </div>
            </div>
        </div>
        <Alert :errors="errors"/>
    </div>
</template>
<script>
import Alert from "../components/Alert.vue";
export default {
    name: "SignUp",
    inject: ["mq"],
    data() {
        return {
            data: {
                firstname: null,
                lastname: null,
                email: null,
                password: null,
                location: null
            },
            errors: [],
            tncbx: null
        };
    },
    methods: {
        SignUp() {
            if (!this.data.email || !this.data.password || !this.data.firstname || !this.data.lastname || !this.data.location) {
                this.errors.push("Field cannot be empty");
            }
            else if (!this.validEmail(this.data.email)) {
                this.errors.push("Valid email required.");
            }
             else if (!this.tncbx) {
                this.errors.push("Agreement needs to be checked");
            }
            else {
                var config = {
                    method: "post",
                    url: "{{base_url}}/signup",
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