<template>
  <h3>Add new transaction</h3>

  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text" />
    </div>

    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="text" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>

    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { useToast } from 'vue-toastification';

const amount = ref('');
const text = ref('');

const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Description and Amount must both be provided.');
    return;
  }

  const data = {
    text: text.value,
    amount: parseFloat(amount.value)
  };

  emit('transactionSubmitted', data);

  text.value = '';
  amount.value = '';
};
</script>

<style>
label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}

.btn:focus {
  outline: 0;
}
</style>
