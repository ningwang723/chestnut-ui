<template>
    <div style="display: grid; gap:16px">
        <p>内容: {{ content }}</p>
        <Text v-model="content" />
        <Text>
            <template #prepend>@</template>
            <template #append>搜索</template>
        </Text>
        <Text disabled></Text>
    </div>
</template>
<script>
import { Text } from '../../../src/index'
import { Button } from '../../../src/index'

export default {
    name: 'TextExample',
    components: {
        Text,
        Button
    },
    props: {
        type: String
    },
    data() {
        return {
            content: "文本框"
        }
    }
}
</script>