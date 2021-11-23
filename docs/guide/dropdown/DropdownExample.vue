<template>
    <div>
        <Dropdown>
            <DropdownItem @click="showMsg">1</DropdownItem>
        </Dropdown>
    </div>
</template>
<script>
import { Dropdown, DropdownItem } from '../../../src/index'
export default {
    name: 'DropdownExample',
    components: {
        Dropdown,
        DropdownItem
    },
    props: {
        type: String
    },
    methods: {
        showMsg() {
            alert(1);
        }
    }
}
</script>