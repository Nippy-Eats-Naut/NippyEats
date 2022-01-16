<template>
    <div class="bg--footer">
        <div class="container">
            <div class="row py-5">
                <div class="col-md-4 pe-5">
                    <img src="@/assets/images/Frame.png" alt="Nippyeats logo" class="mb-2"/>
                    <p class="text-white">Eat anywhere !</p>
                </div>
                <div class="col-md-3">
                    <p class="fw-bold text-white">Company</p>
                    <ul>
                        <li>
                            <router-link class="footer--link" to="/about-us">About NippyEats</router-link>
                        </li>
                        <li>
                            <a href="https://provider.nippyeats.com" target="_blank" class="footer--link">Food Vendors</a>
                        </li>
                        <li>
                            <router-link class="footer--link" to="/become-a-delivery-partner">Become a Delivery Partner</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <p class="fw-bold text-white">More Info</p>
                    <ul>
                        <li>
                            <router-link class="footer--link" to="/faqs">FAQs</router-link>
                        </li>
                        <li>
                            <router-link class="footer--link" to="/contact-us">Contact Us</router-link>
                        </li>
                        <li>
                            <router-link class="footer--link" to="/">Privacy Policy</router-link>
                        </li>
                        <li>
                            <router-link class="footer--link" to="/terms-conditions">Terms and Conditions</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <p class="fw-bold text-white">Connect With Us</p>
                    <div class="d-flex">
                        <a target="_blank" href="https://twitter.com/NippyEats" class="me-3">
                            <i class="bi bi-twitter text-white"></i>
                        </a>
                        <a class="me-3" target="_blank" href="https://www.facebook.com/Nippy-Eats-103076754967361/?view_public_for=103076754967361">
                            <i class="bi bi-facebook text-white"></i>
                        </a>
                        <a class="" target="_blank" href="https://www.instagram.com/nippyeats/">
                            <i class="bi bi-instagram text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <p class="text-white">{{new Date().getFullYear()}} © All Rights Reserved. Nippyeats, Inc.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Footer',
}
</script>
<style scoped>
    .footer--link{
        text-decoration: none;
        color:white !important;
    }
    ul{
        padding:0px;
    }
</style>