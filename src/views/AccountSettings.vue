<template>
   <div class="my-3"  :class="mq.current === 'xs' || mq.current === 'sm' ? 'container' : 'px--16'">
        <div class="mb-4">
            <p class="fs-4 fw-bold">Account Settings</p>
        </div>
        <Alert :message="message" category="alert" :success="success"/>
        <div class="row mb-3">
            <div class="col-md-6">
                <div class="">
                    <label for="fname">First Name</label>
                    <input type="text" class="form-control" id="fname" v-model="user.firstName">
                </div>
            </div>
            <div class="col-md-6">
                <div class="">
                    <label for="lname">Last Name</label>
                    <input type="text" class="form-control" id="lname" v-model="user.lastName">
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-6">
                <div class="">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" v-model="user.email">
                </div>
            </div>
            <div class="col-md-6">
                <div class="">
                    <label for="pnum">Phone Number</label>
                    <input type="text" class="form-control" id="pnum" v-model="user.phone">
                </div>
            </div>
        </div>
        <div class="mb-4">
            <label for="sAddr">Street Address</label>
            <input type="text" class="form-control" id="sAddr">
        </div>
        <div>
            <button class="btn btn-primary btn-lg w-100" type="button" disabled v-if="spin">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">Loading...</span>
            </button>
            <button class="btn btn-primary btn-lg w-100" @click="updateHandler" v-else>Update</button>
        </div>
    </div>
</template>
<script>
import Alert from "../components/Alert.vue";
import authHeader from "../services/auth-header"
export default {
    name: "AccountSettings",
    inject: ["mq"],
    data() {
        return {
            spin: false,
            user: {},
            message: null,
            success: null
        };
    },
    methods: {
        updateHandler() {
            this.spin = true;
            var config = {
                method: "put",
                url: "https://api.nippyeats.com/v1/foodies/",
                headers: authHeader(),
                data: JSON.stringify({"firstName": this.user.firstName,
                                    "lastName": this.user.lastName,
                                    "phone": this.user.phone
                                    })
            };
            this.axios(config)
                .then(response => {
                console.log(JSON.stringify(response.data));
                if (response.data.message == "Invalid request data") this.message = 'Problem updating profile, try again'
                else this.message = response.data.message
                this.success = response.data.success;
                this.spin = false;
            })
            .catch(err => {
                this.spin = false;
                this.message = err.response.data.message;
                this.success = err.response.data.success;
            });
        }
    },
    beforeMount() {
        var config = {
            method: "get",
            url: "https://api.nippyeats.com/v1/foodies/",
            headers: authHeader()
        };
        this.axios(config)
            .then(response => {
            this.user = response.data.data;
        });
    },
    components: { Alert }
}
</script>