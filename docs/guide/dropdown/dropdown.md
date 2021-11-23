# 下拉框

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `offset` | 下拉框方位 | `down`, `top`, `left` or `right`               | `down`     |

## 插槽

| 插槽       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `default` | 下拉框内容 | -               | `undefined`     |
| `activator` | 下拉框激活器 | -               | `Button`     |

## 子组件
| 组件       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `DropdownItem` | 下拉框按钮 | -               | `undefined`     |

## 示例

```vue
    <Dropdown>
        <DropdownItem @click="showMsg">1</DropdownItem>
    </Dropdown>
```

<DropdownExample/>

<script setup>
import DropdownExample from './DropdownExample.vue'
</script>