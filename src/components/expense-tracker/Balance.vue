<template>
  <h4>Your Balance</h4>
  <span class="balance-amount">$ {{ total }}</span>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true
  }
});
</script>

<style>
.balance-amount {
}
</style>
