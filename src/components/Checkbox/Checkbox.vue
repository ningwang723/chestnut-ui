<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    disabled: Boolean,
    indeterminate: Boolean,
    modelValue: {
        type: null,
        default: false
    },
    value: null
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
    return ['cu-checkbox']
})

const checked = computed(() => {
    return props.modelValue == props.value
})

const handleChecked = () => {
    if (checked.value) {
        return emit("update:modelValue", props.value ? "" : false)
    }

    return emit("update:modelValue", props.value ? props.value : true)
}
</script>

<template>
    <label class="cu-checkbox">
        <input
            type="checkbox"
            :checked="checked"
            @change="handleChecked"
            :indeterminate="indeterminate"
            :disabled="disabled"
        />
        <div class="cu-checkbox-el"></div>
        <span class="cu-checkbox-text">
            <slot></slot>
        </span>
    </label>
</template>

<style lang="postcss">
.cu-checkbox {
    @apply inline-flex items-center relative gap-2;

    & > [type="checkbox"] {
        @apply w-0 h-0 m-0 invisible;

        &:checked + .cu-checkbox-el {
            @apply bg-primary border-primary-light;

            &:before {
                content: "";
                transform: rotate(45deg);
                top: -2px;
                @apply inline-block w-2 h-3 border-l-0 border-t-0 border-b-2 border-r-2 border-white border-solid relative;
            }
        }

        &:disabled + .cu-checkbox-el {
            @apply bg-gray-200 border-gray-400;
        }

        &:indeterminate + .cu-checkbox-el {
            @apply bg-primary border-primary-light;

            &:before {
                content: "";
                @apply inline-block w-3 border-l-0 border-t-0 border-b-2 border-r-0 border-white border-solid relative;
            }
        }
    }

    & > .cu-checkbox-el {
        @apply w-5 h-5 border border-black border-solid inline-flex items-center justify-center transition-colors;
        border-radius: 4px;
    }

    & > .cu-checkbox-text {
        @apply select-none;
    }
}
</style>