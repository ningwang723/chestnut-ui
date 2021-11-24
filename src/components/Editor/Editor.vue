<template>
    <div class="cu-editor" ref="editorEl"></div>
</template>
<script setup>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAttrs, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    config: {
        type: Object,
        default: {
            language: "zh-cn"
        }
    },
    modelValue: null
})

const editorEl = ref(null);
let editor;

const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
    import("@ckeditor/ckeditor5-build-classic").then(module => {
        const ClassicEditor = module.default;

        ClassicEditor.create(editorEl.value, {
            ...props.config,
            initialData: props.modelValue
        })
            .then(instance => {
                editor = instance
                editor.model.document.on("change:data", () => {
                    emit("update:modelValue", editor.getData())
                })
            })
            .catch(err => console.error(err))
    })
})

onUnmounted(() => {
    editor.destroy();
})
</script>