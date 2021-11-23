<template>
    <div class="cu-file">
        <Uploader v-if="!multiple" :name="name" :file="selected" v-model="selected" v-bind="attrs" />
        <template v-else>
            <Uploader
                v-for="(file, index) in selected"
                :key="file"
                :name="`${name}-${index}`"
                :file="file"
                :readonly="true"
                :canRemove="true"
                @remove="handleRemove(index)"
            />
            <Uploader
                v-if="canSelect"
                :name="`${name}-multiple`"
                v-model="selected"
                v-bind="attrs"
                :multiple="multiple"
            />
        </template>
    </div>
</template>

<script setup>
import { computed, ref, useAttrs } from 'vue';
import Uploader from './Uploader.vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    modelValue: null,
    multiple: Boolean
})
const attrs = useAttrs();
const emit = defineEmits(["update:modelValue"]);

const selected = computed({
    get() {
        if (props.modelValue === undefined) {
            return !props.multiple ? null : [];
        }

        const files = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue];

        return !props.multiple ? files[0] : files;
    },
    set(val) {
        if ((props.modelValue && attrs.max) && props.modelValue.length + val.length > attrs.max) {
            alert(`超过最大上传数量，最多允许选择 [ ${attrs.max} ] 个文件,请重新选择。`)
            return;
        }

        if (props.modelValue !== undefined && Array.isArray(props.modelValue)) {
            const files = props.modelValue.concat(val);

            return emit("update:modelValue", files);
        }

        emit("update:modelValue", val);
    }
})

const handleRemove = (index) => {
    selected.value.splice(index, 1);
}

const canSelect = computed(() => {
    if (props.modelValue === undefined) {
        return true;
    }

    return attrs.max != props.modelValue.length
})
</script>
<script>
export default {
    inheritAttrs: false
}
</script>

<style lang="postcss">
.cu-file {
    @apply flex gap-4 flex-wrap;
}
</style>