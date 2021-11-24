<template>
    <div class="cu-file-uploader">
        <input
            v-if="!attrs.readonly"
            type="file"
            :name="name"
            :id="name"
            v-bind="attrs"
            @change="handleSelelected"
        />
        <label :for="name">
            <svg
                v-if="!file"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"
                />
            </svg>
            <img v-else :src="src" :alt="file.name" />
            <Button
                type="text"
                color="danger"
                size="xs"
                class="remove-icon"
                v-if="canRemove"
                @click="emit('remove')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"
                    />
                    <path
                        d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"
                    />
                    <path
                        d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"
                    />
                </svg>
            </Button>
        </label>
    </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import Button from '../Button/Button.vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    modelValue: null,
    file: null,
    canRemove: Boolean
})

const attrs = useAttrs();
const emit = defineEmits(['update:modelValue', 'remove'])

const src = computed(() => {
    const file = props.modelValue || props.file

    if (Object.prototype.toString.call(file) === '[object File]') {
        return URL.createObjectURL(file);
    }

    return file
})

const handleSelelected = ({ target }) => {
    if (target.files.length === 0) {
        return;
    }

    const files = Array.from(target.files);
    target.files = undefined;

    emit('update:modelValue', files);
}
</script>

<script>
export default {
    inheritAttrs: false
}</script>

<style lang="postcss">
.cu-file-uploader {
    @apply relative;

    & > input[type="file"] {
        @apply hidden;
    }

    input[type="file"][disabled] ~ label {
        @apply bg-gray-100 text-gray-400 hover:bg-gray-100 hover:border-gray-300 hover:shadow-none cursor-not-allowed;
    }

    & > label {
        @apply inline-flex items-center justify-center hover:text-primary cursor-pointer  w-32 h-32 border border-solid border-gray-300 rounded hover:border-primary hover:shadow-md transition-all overflow-hidden p-1;
    }
}

.remove-icon {
    @apply absolute top-1 right-1;
}
</style>