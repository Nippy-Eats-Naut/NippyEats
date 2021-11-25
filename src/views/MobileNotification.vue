<template>
    <div class="shadow">
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
    name: 'MobileNotification',
    data(){
        return {
            notifications: [],
        }
    },
    computed:{
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
    .--trans{
        transform: rotate(26.95deg)
    }
</style>