<template>
  <div>
    <Head title="ようこそ" />
    <h1>ようこそ</h1>
    <p>こんにちは {{ name }} さん。</p>
    <Counter />
  </div>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

defineProps<{
  name: string,
}>()

console.log(route('home'))
</script>
