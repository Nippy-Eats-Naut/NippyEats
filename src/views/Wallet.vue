<template>
    <div>
        <div class="container my-5">
            <p class="fs-4 fw-bold">Your Wallet</p>
        </div><hr>
        <div class="container mb-5">
            <p class="fs-5">Payment methods</p>
            <div class="--empty w-100">
                <p class="text-secondary">
                    <i class="bi bi-wallet fs-3"></i>
                </p>
                <p class="text-secondary">Nothing here yet</p>
                <button class="btn btn-primary text-white " data-bs-toggle="modal" data-bs-target="#AddCard">
                    <i class="bi bi-plus"></i>Add a new card
                </button>
                <AddCard />
            </div>
            <!--<div class="d-flex">
                <img src="@/assets/images/Group_247.png" class="rounded" height="120">
                <div class="ms-3 card--btn">
                    <button class="btn bg-light text-secondary rounded-circle" data-bs-toggle="modal" data-bs-target="#AddCard">
                        <i class="bi bi-plus"></i>
                    </button>
                    <a class="text-dark small text-decoration-none">Add a new card</a>
                </div>
                <AddCard />
            </div><hr class="my-3">-->
            <!--FOOFIE WALLET SECTION-->
        </div>
    </div>
</template>
<script>
import AddCard from "../components/AddCard.vue";
export default {
    name: "Wallet",
    components: { AddCard }
}
</script>
<style scoped>
    .card--btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>