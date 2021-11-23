<template>
    <div>
        <p>Checked: {{ checked }}</p>
        <Checkbox v-model="checked" :value="1">复选框</Checkbox>
        <Checkbox disabled v-model="checked">复选框</Checkbox>
        <Checkbox indeterminate>复选框</Checkbox>
    </div>
</template>
<script>
import { Checkbox } from '../../../src/index'
export default {
    name: 'CheckboxExample',
    components: {
        Checkbox,
    },
    props: {
        type: String
    },
    data() {
        return {
            checked: 1
        }
    }
}
</script>