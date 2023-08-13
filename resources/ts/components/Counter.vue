<template>
  <div>
    <p>counter: {{ counter.value }}</p>
    <button @click="counter.increment()">+</button>
    <button @click="counter.decrement()">-</button>
  </div>
</template>

<script setup lang="ts">
const counter = useCounter()
</script>
