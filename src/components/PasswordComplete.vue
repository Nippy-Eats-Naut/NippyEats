<template>
    <div>
        <p class="fw-bold fs-4">Enter verification code and new password</p>
        <div class="mb-3">
            <input type="text" placeholder="code" class="form-control"  :value="code" @input="$emit('update:code', $event.target.value)">
        </div>
        <div class="mb-3">
            <input type="password" placeholder="password" class="form-control" :value="password" @input="$emit('update:password', $event.target.value)">
        </div>
    </div>
</template>
<script>
export default {
    name: "PasswordComplete",
    props:{
        code: String, password: String
    },
    emits: ['update:password', 'update:code'],
    methods: {
        goBack() {
            window.history.back();
        },
    },
}
</script>