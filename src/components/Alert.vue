<template>
    <div class="position-relative bottom-0 end-0 p-3" style="z-index: 11">
        <div class="alert alert-dismissible fade border border-0 border-start border-5 border-danger" :class="errors.length === 0 ? 'hide' : 'show'" role="alert" v-for="error,index in errors" :key="index">
            {{error}}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Toast',
    props: {
        errors:{
            type: Array
        }
    }
}
</script>