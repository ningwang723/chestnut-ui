<template>
    <div style="display:grid; gap:8px">
        <Editor v-model="content"></Editor>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Editor } from "../../../src/index"

const content = ref('https://v3.cn.vuejs.org/logo.png');
</script>