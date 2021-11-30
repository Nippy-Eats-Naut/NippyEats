<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body position-relative">   
            <router-link to="/login" class="btn text-white mt-5 d-flex justify-content-center">Login/Sign Up</router-link>
            <div class="position-absolute bottom-0">
                <div class="row">
                    <img src="@/assets/images/logo.png" alt="Nippyeats logo" class="auto-img">
                </div>
                <div class="row my-3">
                    <a href="" class="col-md-6 col-6">
                        <img src="@/assets/images/google.png" alt="Get on google play" class="auto-img">
                    </a>
                    <a href="" class="col-md-6 col-6">
                        <img src="@/assets/images/apple.png" alt="Get on apple store" class="auto-img">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SidenavNoLoggedIn',
}
</script>
<style scoped>
    a.btn{
        background-color: rgba(252, 76, 1, 1);
        text-decoration: none;
    }
</style>