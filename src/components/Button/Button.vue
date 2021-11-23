<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    type: {
        type: String,
    },
    color: String,
    buttonType: {
        type: String,
        default: "button",
    },
    size: String
})

const classes = computed(() => {
    return ['cu-btn', { [`is-${props.type}`]: props.type, [`color-${props.color}`]: props.color, [`is-${props.size}`]: props.size }]
})

const emit = defineEmits(['click']);
</script>

<template>
    <button :class="classes" :type="buttonType" @click="emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="postcss">
.cu-btn {
    @apply outline-none border inline-flex gap-1 px-4 py-2 bg-white border-gray-300 border-solid hover:bg-gray-100 transition-colors items-center;

    border-radius: 4px;

    &.is-xs {
        @apply px-2 py-1;
    }

    &[disabled] {
        @apply cursor-not-allowed bg-gray-100 text-gray-400;

        &[class*=" color-"] {
            @apply text-gray-200;
        }
    }

    &.color-primary {
        @apply bg-primary-light border-primary-light text-white hover:bg-primary-dark;

        &[disabled] {
            @apply bg-primary-dark;
        }
    }

    &.color-success {
        @apply bg-green-500 border-green-500 text-white hover:bg-green-600;

        &[disabled] {
            @apply bg-green-600;
        }
    }

    &.color-danger {
        @apply bg-red-500 border-red-500 text-white hover:bg-red-600;

        &[disabled] {
            @apply bg-red-600;
        }
    }

    &.color-warning {
        @apply bg-yellow-400 border-yellow-400 text-white hover:bg-yellow-500;

        &[disabled] {
            @apply bg-yellow-500;
        }
    }

    &.color-info {
        @apply bg-blue-400 border-blue-400 text-white hover:bg-blue-600;

        &[disabled] {
            @apply bg-blue-600;
        }
    }

    &.is-outlined {
        @apply bg-transparent text-gray-700 hover:bg-gray-100;

        &[disabled] {
            @apply bg-gray-100 text-gray-400;
        }
    }

    &.is-text {
        @apply bg-transparent border-transparent hover:bg-gray-100;

        &[class*=" color-"] {
            @apply hover:bg-gray-100;
        }

        &.color-primary {
            @apply text-primary-light hover:text-primary-dark;
        }
        &.color-success {
            @apply text-green-500 hover:text-green-600;
        }

        &.color-danger {
            @apply text-red-500 hover:text-red-600;
        }

        &.color-warning {
            @apply text-yellow-400 hover:text-yellow-500;
        }

        &.color-info {
            @apply text-blue-400 hover:text-blue-600;
        }

        &[disabled] {
            @apply bg-transparent hover:bg-gray-100 pointer-events-none;

            &.color-primary {
                @apply text-primary-dark;
            }

            &.color-success {
                @apply text-green-600;
            }

            &.color-danger {
                @apply text-red-600;
            }

            &.color-warning {
                @apply text-yellow-500;
            }

            &.color-info {
                @apply text-blue-600;
            }
        }
    }
}
</style>