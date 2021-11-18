<template>
    <div class="container mb-5">
        <div class="my-5">
            <p class="fs-4 text-center fw-bold">Become A Delivery Partner</p>
            <p class="text-secondary text-center px--16">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
            </p>
        </div>
        <div class="px--16">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="fname" placeholder="name@example.com">
                <label for="text">Full Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="location" placeholder="name@example.com">
                <label for="text">Location</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="phnum" placeholder="name@example.com">
                <label for="text">Phone number</label>
            </div>
            <div class="form-floating mb-5">
                <input type="text" class="form-control" id="email" placeholder="name@example.com">
                <label for="email">Email Address</label>
            </div>
            <button class="btn btn-lg w-100 bg--orange text-white">Proceed with next step</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DeliveryPartner',
    data(){
        return{
        }
    }
}
</script>