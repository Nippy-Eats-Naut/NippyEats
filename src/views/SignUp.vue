<template>
    <div class="container">
        <div class="d-flex justify-content-between mb-5">
            <button class="btn text--orange">
                <i class="bi bi-arrow-left me-3"></i> Back
            </button>
            <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="180" height="39">
            <div></div>
        </div>
        <div class="px--16">
            <div class="">
                <p class="fw-bold fs-4">Create An Account</p>
                <div class="mb-3 row">
                    <div class="col-md-6">
                        <input type="text" placeholder="First Name" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <input type="text" placeholder="Last Name" class="form-control">
                    </div>
                </div>
                <div class="mb-3">
                    <input type="email" placeholder="Email Address" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="text" placeholder="Location" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="Password" class="form-control">
                </div>
                <div class="mb-4 d-flex">
                    <input type="checkbox" class="me-2">
                    <p>I hearby acknowlege and agree that I have read and understood 
                        <router-link to="" class="text--orange">Nippyeat's Privacy Policy</router-link> and
                        <router-link to="/terms-conditon" class="text--orange">Terms and condition</router-link>
                    </p>
                </div>
                <div class="mb-4">
                    <button class="btn bg--orange btn-lg w-100 text-white">SignUp</button>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <p>Already have an account? </p>
                    <router-link to="/login" class="text--orange"> Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp'
}
</script>
<style scoped>
    
</style>