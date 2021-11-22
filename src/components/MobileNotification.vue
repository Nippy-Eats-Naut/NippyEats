<template>
    <div  v-show="open == true" class="notification shadow">
        <div class="ml-3 my-2">
            <button @click="handleClick" class="btn ps-0 text-danger">
                <i class="bi bi-x text-2xl"></i>
            </button>
        </div>
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
    props: {
        open: {
            type: Boolean,
        }
    },
    data(){
        return {
            notifications: [],
            fooOpen: false
        }
    },
    methods:{
        handleClick() {
            this.$emit("update:parent", this.fooOpen);
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
    .notification{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1099;
        background: white;
        right: 0;
        border-radius: 16px 16px 0px 0px;
        height: 560px;
        overflow: scroll;
    }
</style>