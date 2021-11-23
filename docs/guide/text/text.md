# 文本框

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `disabled` | 是否禁用按钮 | `true` or `false`               | `false`     |

## 插槽

| 插槽       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `prepend` | 前置附加件 | -               | `undefined`     |
| `append` | 后置附加件 | -               | `undefined`     |

## 事件

| 时间   | 描述               | 参数    |
| :------ | :------------------------ | :------------ |
| `update:modelValue` | 复选框状态更新 | `modelValue` |

## 示例

```vue
    <div style="display: grid; gap:16px">
        <p>内容: {{content}}</p>
        <Text v-model="content"></Text>
        <Text>
            <template #prepend>@</template>
            <template #append>搜索</template>
        </Text>
        <Text disabled></Text>
    </div>
```

<TextExample/>

<script setup>
import TextExample from './TextExample.vue'
</script>