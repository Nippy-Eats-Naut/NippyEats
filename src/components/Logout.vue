<template>
    <div>
        <div class="modal fade" id="Logout" tabindex="-1" aria-labelledby="Logout" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-3">
                        <p class="text-center">Are you sure you want to log out?</p>
                        <div class="d-flex justify-content-evenly">
                            <div class="">
                                <button type="button" class="bg-dark btn text-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
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
    data(){
        return{
        }
    },
    methods:{
        Logout(e){
            e.preventDefault()
            document.querySelector("button#logout").setAttribute("data-bs-dismiss", "modal");
            this.$router.push('/')
            localStorage.removeItem('nippy.user')
            localStorage.removeItem('nippy.token')
        }
    }
}
</script>