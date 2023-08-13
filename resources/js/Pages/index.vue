<template>
    <dev>
        <Head title="ようこそ" />
        <h1>ようこそ</h1>
        <p>こんにちは {{ name }} さん。</p>
    </dev>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'

defineProps({ name: String })
</script>
