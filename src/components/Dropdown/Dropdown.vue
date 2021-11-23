<script setup>
import { computed, defineProps, provide, ref, useSlots } from "vue";
import Button from "../Button/Button.vue";

const props = defineProps({
    offset: {
        type: String,
        default: 'down'
    },
    text: {
        type: [String, Number],
        default: "下拉框"
    },
    disabled: Boolean
})

const slots = useSlots();

const active = ref(false);

const classes = computed(() => {
    return ['cu-dropdown-items', active.value ? 'is-active' : '', active.value ? `on-${props.offset}` : '']
})

const show = (show = true) => {
    active.value = show;
}

const toggle = () => {
    console.log(active.value)
    active.value = !active.value
}

provide("dropdown", {
    active,
    show
})
</script>

<template>
    <div class="cu-dropdown">
        <slot name="activator" :show="show" :active="active">
            <Button @blur="show(false)" @click="toggle" :disabled="disabled">
                {{ text }}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                    />
                </svg>
            </Button>
        </slot>

        <transition name="fade">
            <div :class="classes" v-if="active">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="postcss">
.cu-dropdown {
    @apply relative;

    &-items {
        @apply absolute bg-white min-w-full z-10 border border-solid border-gray-300 rounded overflow-hidden;

        &.is-active {
            &.on-down {
                @apply top-full;
                transform: translateY(8px);
            }

            &.on-top {
                @apply bottom-full;
                transform: translateY(-8px);
            }
        }
    }

    &-item {
        @apply p-2 hover:bg-gray-100 whitespace-nowrap;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(0);
}
</style>