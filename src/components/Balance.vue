<template>
    <h4>YOUR BALANCE</h4>
    <h3 id="balance">${{ total }}</h3>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    total: {
        type: Number,
        required: true,
    },
})
</script>


