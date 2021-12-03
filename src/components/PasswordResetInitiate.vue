<template>
    <div>
        <p class="fw-bold fs-4">Enter your email</p>
        <div class="mb-3">
            <input type="email" placeholder="email" class="form-control"  :value="email" @input="$emit('update:email', $event.target.value)">
        </div>
    </div>
</template>
<script>
export default {
    name: "PasswordInitiate",
    props:{
        email: String
    },
    emits: ['update:email'],
    methods: {
        goBack() {
            window.history.back();
        }
    }
}
</script>