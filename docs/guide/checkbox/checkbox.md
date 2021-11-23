# 面板

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `slot`    | 按钮插槽        | -                               | `undefined` |
| `disabled` | 是否禁用按钮 | `true` or `false`               | `false`     |
| `indeterminate` | 是否待定 | `true` or `false` | `false` |
| `value` | 控件值，如果存在控件值，则更新状态时返回的是控件值而不是 Boolean值 | `undefined` or `any` | `undefined` |

## 事件

| 时间   | 描述               | 参数    |
| :------ | :------------------------ | :------------ |
| `update:modelValue` | 复选框状态更新 | `modelValue` |

## 示例

```vue
    <div>
        <p>Checked: {{ checked }}</p>
        <Checkbox v-model="checked" :value="1">复选框</Checkbox>
        <Checkbox disabled v-model="checked">复选框</Checkbox>
        <Checkbox indeterminate>复选框</Checkbox>
    </div>
```

<CheckboxExample/>

<script setup>
import CheckboxExample from './CheckboxExample.vue'
</script>