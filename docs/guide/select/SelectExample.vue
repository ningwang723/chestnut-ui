<template>
    <div style="display:grid; gap:8px">
        <Select :options="options" v-model="value" />
        <Select :options="options" v-model="value" disabled />
        <Select :options="options" v-model="value" searchable />
        <Select :options="options" v-model="value" searchable disabled />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Select } from '../../../src/index';

const options = ref([1, 2, 3, 4, 5, { text: 6, value: 6 }])
const value = ref(undefined)
</script>