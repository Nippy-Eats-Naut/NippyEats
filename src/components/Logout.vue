<template>
    <div>
        <div class="modal fade" id="Logout" tabindex="-1" aria-labelledby="Logout" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="">
                            <button type="button" class="bg-dark text-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                        </div>
                        <div>
                            <button type="button" class="bg--orange text-white">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Logout'
}
</script>