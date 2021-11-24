<template>
    <div style="display:grid; gap:8px">
        <UploadFile name="uploader" v-model="single" />
        <UploadFile name="uploader" v-model="multiple" multiple max="9" />
        <UploadFile name="uploader1" v-model="single" disabled />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { UploadFile } from '../../../src/index';

const single = ref('https://v3.cn.vuejs.org/logo.png');
const multiple = ref(undefined);
</script>