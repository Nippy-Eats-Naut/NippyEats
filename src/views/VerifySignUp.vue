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
                    <button class="btn btn-primary btn-lg w-100 text-white" @click="Verify" :disabled="loading">
                        <span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                            role="status" aria-hidden="true"
                            ></span>Verify
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from "../components/Alert.vue";
import {mapGetters} from 'vuex'
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
                this.success = false;
                this.message = "Field cannot be empty";
            }
            else {
                this.loading = true
                var data = this.data
                this.$store.dispatch("auth/verifySignup", data)
                .then(() => {
                        if (this.$route.query.redirect != null) {
                            this.$router.push(this.$route.query.redirect);
                        }
                        else {
                            this.$router.push("/home");
                        }
                    },
                    (error) => {
                        this.loading = false;
                        this.message = error.response.data.message;
                        this.success = error.response.data.success;
                    }
                );
            }
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