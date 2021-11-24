# 富文本编辑器

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `config` | 编辑器配置 | [CKEditor5 Config](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig.html) | `{language: "zh-cn"}`     |

## 事件

| 时间   | 描述               | 参数    |
| :------ | :------------------------ | :------------ |
| `update:modelValue` | 编辑器内容更新 | `modelValue` |

## 示例

```vue
    <div style="display:grid; gap:8px">
        <Editor v-model="content"></Editor>
    </div>
```

<EditorExample/>

<script setup>
import EditorExample from './EditorExample.vue'
</script>