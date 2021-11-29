<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header justify-content-end">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body position-relative">   
            <router-link to="/login" class="btn text-white mt-5 d-flex justify-content-center">Login/Sign Up</router-link>
            <div class="position-absolute bottom-0 ps-5">
                <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="230" height="50">
                <div class="d-flex my-3">
                    <a href="" class="me-3">
                        <img src="@/assets/images/google.png" alt="Get on google play" width="100" height="30">
                    </a>
                    <a href="">
                        <img src="@/assets/images/apple.png" alt="Get on apple store" width="100" height="30">
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