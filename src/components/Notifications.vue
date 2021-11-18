<template>
    <div class="dropdown-menu p-0 rounded border-0" aria-labelledby="notification">
        <div class="bg--orange ps-3 py-2">
            <p class="mb-0 text-white">Your Notifications</p>
        </div>
        <div v-show="notifications.length == 0" class="--empty h-100 w-100"> 
            <p class="text-secondary --trans">
                <i class="bi bi-bell fs-3"></i>
            </p>
            <p class="text-secondary">Nothing here yet</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Notifications',
    data(){
        return {
            notifications: []
        }
    }
}
</script>
<style scoped>
    .--empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .dropdown-menu{
        box-shadow: 0px 4px 20px 6px rgba(196, 196, 196, 0.18);
        width: 296px;
        height: 278px;
    }
    .--trans{
        transform: rotate(26.95deg)
    }
</style>