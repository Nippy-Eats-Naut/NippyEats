<template>
    <div class="container">
        <div class="my-5">
            <p class="fs-4 fw-bold text-center">What We Do</p>
        </div>
        <div class="dmb-4 position-relative">   
            <div>
                <img src="@/assets/images/Group_196.png" class="rounded img-fluid">
            </div>
            <div class="px-5 py-4 bg--hero">
                <p class="text-white fw-bold fs-3">WHAT WE DO</p>
                <p class="text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. 
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div class="d-flex justify-content-end">
                    <router-link to="/about-us" class="rounded-circle bg--orange btn me-3">
                        <i class="bi bi-arrow-left-short"></i>
                    </router-link>
                    <router-link to="/terms-conditions" class="rounded-circle bg--orange btn">
                        <i class="bi bi-arrow-right-short"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WhatWeDo'
}
</script>