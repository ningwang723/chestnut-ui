<template>
    <div class="cu-dropdown-item" @click="handleClicked">
        <slot></slot>
    </div>
</template>
<script setup>
import { inject } from "vue";

const dropdown = inject("dropdown");

const emit = defineEmits(["click", 'mousedown']);

const handleClicked = (e) => {
    dropdown.show(false);

    emit("click", e);
    emit("mousedown", e);
}

</script>