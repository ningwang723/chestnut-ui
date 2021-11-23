<script setup>
import { defineProps, useAttrs, useSlots } from "vue";

const props = defineProps({
    disabled: Boolean,
    modelValue: {
        type: null,
        default: ''
    },
    name: String
})

const emit = defineEmits([`update:modelValue`, 'blur', 'focus'])
const slots = useSlots();
const attrs = useAttrs();

const handleInput = ({ target }) => {
    emit(`update:modelValue`, target.value);
}
</script>

<script>
export default {
    inheritAttrs: false
}
</script>

<template>
    <div class="cu-text">
        <input
            type="text"
            :disabled="disabled"
            :value="modelValue"
            v-bind="attrs"
            @change="handleInput"
            @blur="emit('blur')"
            @focus="emit('focus')"
        />
        <span class="cu-text-addon cu-text-prepend" v-if="slots.prepend">
            <slot name="prepend"></slot>
        </span>
        <span class="cu-text-addon cu-text-append" v-if="slots.append">
            <slot name="append"></slot>
        </span>
    </div>
</template>

<style lang="postcss">
.cu-text {
    @apply inline-flex;

    & > input {
        @apply outline-none p-2 border border-solid rounded-none transition-all focus:border-primary focus:shadow-md hover:border-primary hover:shadow-md border-gray-300 order-2;

        &[disabled] {
            @apply cursor-not-allowed;
        }

        &:focus ~ .cu-text-addon,
        &:hover ~ .cu-text-addon, {
            @apply border-primary shadow-md;
        }

        &:only-child {
            @apply rounded;
        }
    }

    & > &-addon {
        @apply bg-gray-100 inline-flex  justify-center items-center h-full p-2 border border-solid border-gray-300 transition-all;
    }

    & > &-prepend {
        @apply order-1 border-r-0 rounded-l;
    }

    & > &-append {
        @apply order-3 border-l-0 rounded-r;
    }
}
</style>