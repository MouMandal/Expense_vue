<template>
    <h4>History</h4>
    <div class="transaction">
        <div v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
            <h5><button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button>{{ transaction.text }}</h5>
            <p id="snear">$ {{ transaction.amount }}</p>

        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const emit = defineEmits(['transactionDeleted'])
const props = defineProps({
    transactions: {
        type: Array,
        required: true,
    },
})

//delete transaction
const deleteTransaction = (id) => {
    emit('transactionDeleted', id);
}


</script>