<template>
    <div class="cu-select">
        <Dropdown :text="showOption(modelValue)" :disabled="disabled">
            <DropdownItem @click="handleSelected(undefined)">{{ placeholder }}</DropdownItem>
            <DropdownItem
                v-for="(option, index) in filtered"
                :key="option"
                @click="handleSelected(option, index)"
                :class="{ 'is-selected': isSelected(option) }"
            >
                <slot
                    :option="option"
                    :selected="isSelected(option)"
                >{{ showOption(option, index) }}</slot>
            </DropdownItem>
            <template v-if="searchable" #activator="{ show }">
                <div class="cu-select-text">
                    <Text
                        @focus="show()"
                        @blur="show(false)"
                        v-model="searched"
                        :placeholder="placeholder"
                        :disabled="disabled"
                    />
                    <div class="cu-select-icon">
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
                    </div>
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { isObject } from '../../utils';
import Dropdown from '../Dropdown/Dropdown.vue';
import DropdownItem from '../Dropdown/DropdownItem.vue';
import Text from '../Text/Text.vue';

const props = defineProps({
    modelValue: {
        type: null,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    searchable: Boolean,
    placeholder: {
        type: String,
        default: "-- 请选择 --"
    },
    disabled: Boolean
})

const search = ref(undefined);

const emit = defineEmits(["update:modelValue"])

const handleSelected = (option, index) => {
    search.value = undefined;

    emit("update:modelValue", isObject(option) ? option : index);
}

const searched = computed({
    get() {
        if (search.value !== undefined && search.value !== '') {
            return search.value
        }

        if (props.modelValue !== undefined) {
            return showOption(props.modelValue)
        }

        return '';
    },
    set(val) {
        search.value = val;
    }
})

const filtered = computed(() => {
    if (search.value !== undefined && search.value !== '') {
        return props.options.filter(option => {
            return isObject(option) ? option.text == search.value : option == search.value;
        });
    }

    return props.options;
})

const isSelected = (option) => {
    return option === props.modelValue;
}

const showOption = (option) => {
    if (option === undefined || option === null || option === '') {
        return props.placeholder;
    }

    if (isObject(option)) {
        return option.text;
    }

    return props.options[option] || option;
}
</script>

<style lang="postcss">
.cu-dropdown-item.is-selected {
    @apply bg-primary text-white;
}

.cu-select {
    @apply inline-flex;

    .cu-select-text {
        @apply relative;

        .cu-text > input {
            @apply pr-6;
        }

        & > .cu-select-icon {
            @apply inline-flex h-full items-center absolute right-2;
        }
    }
}
</style>