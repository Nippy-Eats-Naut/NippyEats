<template>
    <div>
        <div class="modal fade" id="Logout" tabindex="-1" :class="mOpen == true ? 'show d-block':''">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-3">
                        <p class="text-center">Are you sure you want to log out?</p>
                        <div class="d-flex justify-content-evenly">
                            <div class="">
                                <button type="button" class="bg-dark btn text-white" @click="handleClick">Cancel</button>
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary text-white" id="logout" @click="Logout">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Logout',
    props: {
        mOpen: {
            type: Boolean
        }
    },
    data(){
        return{
            barOpen: false
        }
    },
    methods:{
        handleClick(){
            this.$emit("update:parent", this.barOpen);
            this.$store.commit('activate_overlay', false)
        },
        Logout(e){
            e.preventDefault()
            this.$emit("update:parent", this.barOpen);
            this.$store.commit('activate_overlay', false)
            this.$router.push('/')
            localStorage.removeItem('nippy.user')
            localStorage.removeItem('nippy.token')
        }
    }
}
</script>