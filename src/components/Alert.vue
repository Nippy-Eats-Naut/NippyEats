<template>
    <div v-if="category == 'alert'">
        <div v-show="message != null">
            <div class="alert alert-dismissible mb-1" :class="success == true ? 'alert-success': 'alert-danger'" role="alert">
                {{message}}
                <router-link v-if="link" to="/verify-signup"><strong>Verify Signup</strong></router-link>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="position-relative bottom-0 end-0 p-3" style="z-index: 11">
            <div class="alert alert-dismissible border border-0 border-start border-5 border-danger" :class="errors.length === 0 ? 'hide' : 'show'" role="alert" v-for="error,index in errors" :key="index">
                {{error}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Alert',
    props: {
        errors:{type: Array},
        success: {type: Boolean},
        message: {type: String},
        category: {type: String},
        link: {type: Boolean}
    }
}
</script>