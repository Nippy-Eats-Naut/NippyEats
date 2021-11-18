<template>
    <div class="container">
        <div class="my-5">
            <p class="fs-4 fw-bold text-center">About Us</p>
        </div>
        <div class="d-flex mb-4 align-items-baseline">   
            <div>
                <img src="@/assets/images/Group_196.png" class="rounded img-fluid">
            </div>
            <div class="px-5 py-4 bg--hero">
                <p class="text-white fw-bold fs-3">WHO WE ARE</p>
                <p class="text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. 
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <router-link to="/what-we-do" class="rounded-circle bg--orange btn float-end">
                    <i class="bi bi-arrow-right-short"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutUs'
}
</script>