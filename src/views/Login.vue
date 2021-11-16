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
                <p class="fw-bold fs-4">Access Your Account</p>
                <div class="mb-3">
                    <input type="email" placeholder="Email Address or Phone number" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="password" placeholder="Password" class="form-control">
                </div>
                <div class="mb-4 d-flex justify-content-between align-items-baseline">
                    <input type="checkbox">
                    <router-link to="" class="text--orange">Forgot Password</router-link>
                </div>
                <div class="mb-4">
                    <button class="btn bg--orange btn-lg w-100 text-white">Login</button>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                    <p>Don't have an account? </p>
                    <router-link to="/signup" class="text--orange"> Sign Up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login'
}
</script>
<style scoped>
    
</style>