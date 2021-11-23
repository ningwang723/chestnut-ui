<template>
    <div style="display:grid; gap:8px">
        <File name="uploader" v-model="single" />
        <File name="uploader" v-model="multiple" multiple max="9" />
        <File name="uploader1" v-model="single" disabled />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { File } from '../../../src/index';

const single = ref('https://v3.cn.vuejs.org/logo.png');
const multiple = ref(undefined);
</script>