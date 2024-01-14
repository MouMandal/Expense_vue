<template>
    <form id="add" @submit.prevent="onSubmit">
        <div class="new_transaction">
            <input type="text" placeholder="Add new transaction">
        </div>
        <h4>Text</h4>
        <input type="text" id="text" v-model="text" placeholder="Enter text">
        <h4>Amount</h4>
        <h5>(negative-expense,positive-Income)</h5>
        <input type="text" id="amount" v-model="amount" placeholder="Enter amount">
        <br> <br>
        <button class="btn">Add Transaction</button>

    </form>
</template>
<script setup>
import { ref } from 'vue';
//TOASTIFICATION
import { useToast } from 'vue-toastification';
const text = ref("");
const amount = ref("");
//TOASTIFICATION
const toast = useToast();
//DEFINE emit
const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
    if (!text.value || !amount.value) {
        toast.error("?");
        return;
    }
    else {
        console.log(text.value, amount.value);
    }
    const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value),
    };
    emit('transactionSubmitted', transactionData);

    text.value = '';
    amount.value = '';

}
</script>