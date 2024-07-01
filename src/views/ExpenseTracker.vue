<template>
  <div id="expense-tracker">
    <Header />

    <div>
      <Balance :total="+total" />
      <IncomeExpenses :income="+income" :expenses="+expenses" />
      <TransactionList
        :transactions="transactions"
        @transactionDeleted="handleTransactionDeleted"
      />
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Header from '../components/expense-tracker/Header.vue';
import Balance from '../components/expense-tracker/Balance.vue';
import IncomeExpenses from '../components/expense-tracker/IncomeExpenses.vue';
import TransactionList from '../components/expense-tracker/TransactionList.vue';
import AddTransaction from '../components/expense-tracker/AddTransaction.vue';
import { useToast } from 'vue-toastification';

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const toast = useToast();

const income = computed(() => {
  return transactions.value
    .filter((transaction) => {
      return transaction.amount > 0;
    })
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => {
      return transaction.amount < 0;
    })
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

const handleTransactionSubmitted = (data) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: data.text,
    amount: data.amount
  });

  saveTransactionsToLocalStorage();

  toast.success('Transaction added');
};

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => {
    return transaction.id !== id;
  });

  saveTransactionsToLocalStorage();

  toast.success('Transaction deleted');
};

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};
</script>

<style>
#expense-tracker {
  background-color: #f7f7f7;
  color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 30px auto;
  width: 400px;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
}
</style>
