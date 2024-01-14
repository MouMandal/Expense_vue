<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <Income_exp :income="+income" :expenses="+expenses" />
    <Transaction :transactions="transactions" @transactionDeleted="handletransactionDeleted" />
    <AddTransaction @transactionSubmitted="handletransactionSubmitted" />

  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import Income_exp from './components/Income_exp.vue';
import Transaction from './components/Transaction.vue';
import AddTransaction from './components/AddTransaction.vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

/*FOR TRANSACTION*/
import { ref, computed, onMounted } from 'vue';
const transactions = ref([
  // { id: 1, text: 'Flower', amount: -19.9 },
  // { id: 2, text: 'Salary', amount: 299.97 },
  // { id: 3, text: 'Phone', amount: 500.9 },
  // { id: 4, text: 'Book', amount: -10 },
  // { id: 5, text: 'Camera', amount: -150 }
]);
//FETCH FROM LOCALSTORAGE AND onMOUNTED
onMounted(() => {
  const savetransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savetransactions) {
    transactions.value = savetransactions;
  }
});
/*FOR BALANCE*/
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)

});
/*FOR INCOME_EXP*/
//get income
const income = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0)
    .toFixed(2);
})
//get expenses
const expenses = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0)
    .toFixed(2);
})

//ADD TRANSACTION
const handletransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  /*console.log(generateUniqueId());*/
  savetransactionsLocalstorage();
  toast.success("");
}
//define generateUniqueId
const generateUniqueId = () => {
  return Math.floor(Math.random() * 10);
}

//DELETE TRANSACTION
const handletransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  // console.log(transactions);
  // console.log(transactions.value);
  savetransactionsLocalstorage();
  toast.success("");

}

//SAVE TO LOCALSTORAGE
const savetransactionsLocalstorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
}


</script>


<style></style>
