# 选择框

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `disabled` | 是否禁用选择框 | `true` or `false`               | `false`     |
| `options` | 选项 | `Array` | `required` |
| `searchable` | 是否允许搜索选项 | `true` or `false` | `false` |

## 事件

| 时间   | 描述               | 参数    |
| :------ | :------------------------ | :------------ |
| `update:modelValue` | 选择框状态更新 | `modelValue` |

## 示例

```vue
    <div style="display:grid; gap:8px">
        <Select :options="options" v-model="value" />
        <Select :options="options" v-model="value" searchable />
        <Select :options="options" v-model="value" searchable disabled />
    </div>
```

<SelectExample />


<script setup>
import SelectExample from './SelectExample.vue'
</script>