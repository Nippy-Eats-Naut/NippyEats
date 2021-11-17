<template>
    <div class="d-grid justify-items-center align-items-center my-5 px--16">
        <div class="mb-3">
            <img src="@/assets/images/bx_bxs-gift.png" class="rounded" height="106">           
        </div>
        <div class="mb-3">
            <p class="mb-0 fs-4 text-dark fw-bold">Tell your friends about NippyEats!</p>
        </div>
        <div class="mb-4 d-flex justify-content-center">
            <p class="mb-0 text-secondary text-center w-75">YDo you enjoy our service? Invite your friends to use NippyEats using your code below and get a discount on your next order!</p>
        </div>
        <div class="d-flex">
            <div class="input-group border border-secondary rounded-1 d-flex justify-content-between align-items-center me-3">
                <input type="text" class="form-control border-0" id="floatingInput" v-model="promocode">
                <button class="text-dark btn">
                    <i class="bi bi-clipboard-check"></i>
                </button>
            </div>
            <button class="btn bg--orange text-white">SHARE</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InviteFriends',
    data(){
        return{
            promocode: 'NIPPYEATS'
        }
    }
}
</script>