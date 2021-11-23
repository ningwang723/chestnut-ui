# 文件上传

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `disabled` | 是否禁用选择框 | `true` or `false`               | `false`     |
| `multiple` | 是否多选 | `true` or `false` | `false` |
| `accept` | 允许上传的文件类型 | 与HTML上传组件一致 | `undefined` |
| `max` | 允许的最大上传数量 | - | `undefined` |

## 事件

| 时间   | 描述               | 参数    |
| :------ | :------------------------ | :------------ |
| `update:modelValue` | 选择框状态更新 | `modelValue` |

## 示例

```vue
    <div style="display:grid; gap:8px">
        <File name="uploader" v-model="single" />
        <File name="uploader" v-model="multiple" multiple />
        <File name="uploader1" v-model="single" disabled />
    </div>
```

<FileExample/>

<script setup>
import FileExample from './FileExample.vue'
</script>