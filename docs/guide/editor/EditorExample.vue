<template>
    <div style="display:grid; gap:8px">
        <Editor v-model="content"></Editor>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Editor } from '../../../src/index';
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";

const content = ref('https://v3.cn.vuejs.org/logo.png');
</script>