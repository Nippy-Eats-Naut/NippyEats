<template>
    <div class="container">
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? 'pt-3 pb-5' : 'p-5'">
            <button class="btn text--orange" @click="goBack">
                <i class="bi bi-arrow-left"></i> Back
            </button>
            <div class="text-center">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" class="img-fluid">
            </div>
        </div>
        <div :class="mq.current === 'xs' || mq.current === 'sm' ? '' : 'px--16'">
            <Alert :message="message" category="alert" :success="success"/>
            <PasswordResetInitiate v-if="tab == 'initiate'" v-model:email="data.email" />
            <PasswordComplete v-else v-model:code="data.code" v-model:password="data.password"/>
            <div class="mb-3" v-if="tab != 'initiate'">
                <a class="text--orange" @click="tab == 'initiate'">Didn't get the code? Resend</a>
            </div>
            <div class="mb-4">
                <button class="btn btn-primary btn-lg w-100 text-white" @click="Submit" v-if="!loading" v-text="tab=='initiate'?'Send':'Submit'"></button>
                <button class="btn btn-primary btn-lg w-100 text-white" :disabled="loading" v-else>
                    <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                        role="status" aria-hidden="true"
                        ></span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import PasswordResetInitiate from '../components/PasswordResetInitiate.vue';
import PasswordComplete from '../components/PasswordComplete.vue';
import Alert from '../components/Alert.vue';
export default {
    name: "PasswordReset",
    inject: ["mq"],
    data(){
        return{
            tab: 'initiate',
            message: null,
            success: null,
            loading: false,
            data: {
                code: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        goBack() {
            window.history.back();
        },
        Submit() {
            if(this.tab == 'initiate'){
                this.loading = true
                const _data = {email: this.data.email}
                this.$store.dispatch("auth/initiatePassword", _data)
                .then(
                    (data) => {
                        this.message = data.message;
                        this.success = data.success;
                        this.loading = false;
                        this.tab = 'complete'
                    }, 
                    (error) => {
                        this.loading = false;
                        this.message = error.response.data.message;
                        this.success = error.response.data.success;
                    }
                );
                
            }
            else{
                this.loading = true
                const _data = {code: this.data.code, password: this.data.password}
                this.$store.dispatch("auth/completePassword", _data)
                .then((data) => {
                        this.message = data.message;
                        this.success = data.success;
                        this.loading = false;
                        this.$router.push("/login");
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
        ...mapGetters("auth", ["loggedIn"]),
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/home");
        }
    },
    components: { PasswordResetInitiate, PasswordComplete, Alert }
}
</script>