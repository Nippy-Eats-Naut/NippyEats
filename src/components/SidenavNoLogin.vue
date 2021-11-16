<template>
    <div v-show="open == true" class="--sidenav px-3 py-3">
        <div class="d-flex mb-3 justify-content-end">
            <button class="btn" @click="handleClick">
                <i class="bi bi-x fs-5"></i>
            </button>
        </div>
        <div class="d-flex justify-content-center mb-5">
            <router-link to="/login" class="btn text-white">Login/Sign Up</router-link>
        </div>
        <div class="nav--footer">
            <img src="@/assets/images/logo.png" alt="Nippyeats logo" width="230" height="50">
            <div class="d-flex mt-3">
                <a href="" class="me-3">
                    <img src="@/assets/images/google.png" alt="Get on google play" width="100" height="30">
                </a>
                <a href="">
                    <img src="@/assets/images/apple.png" alt="Get on apple store" width="100" height="30">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SidenavNoLoggedIn',
    props:{
        open:{
            type: Boolean,
        }
    },
    data () {
        return { 
            fooOpen: false
        }
    },
    methods:{
        handleClick() {
            this.$emit('update:parent', this.fooOpen)
        }
    }
}
</script>
<style scoped>
    a.btn{
        background-color: rgba(252, 76, 1, 1);
        text-decoration: none;
    }
    .--sidenav {
        height: 100%;
        width: 300px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        transition: 0.5s;
    }
    .nav--footer{
        position: absolute;
        bottom: 16px
    }
</style>