# 按钮

## 参数

| 属性       | 描述               | 属性值                 | 默认值     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `slot`    | 按钮插槽        | -                               | `undefined` |
| `title`    | HTML title 属性      | -                               | `undefined` |
| `type`     | 按钮样式     | `default`, `outlined` or `text` | `default`   |
| `color`    | 按钮颜色     | `primary`, `success`, `danger`, `warning` or `info` | `undefined` |
| `buttonType` | 按钮类型 | `button`, `submit` or `reset`    | `button` |
| `disabled` | 是否禁用按钮 | `true` or `false`               | `false`     |

## 事件

| 事件   | 描述               | 参数    |
| :------ | :------------------------ | :------------ |
| `click` | 点击按钮事件 | `$clickEvent` |

## 示例

### Default

```vue
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button>按钮</Button>
        <Button color="primary">按钮</Button>
        <Button color="danger">按钮</Button>
        <Button color="success">按钮</Button>
        <Button color="warning">按钮</Button>
        <Button color="info">按钮</Button>
    </div>
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button disabled>按钮</Button>
        <Button disabled color="primary">按钮</Button>
        <Button disabled color="danger">按钮</Button>
        <Button disabled color="success">按钮</Button>
        <Button disabled color="warning">按钮</Button>
        <Button disabled color="info">按钮</Button>
    </div>
```

<ButtonExample />

### Outlined

```vue
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button type="outlined">按钮</Button>
        <Button type="outlined" color="primary">按钮</Button>
        <Button type="outlined" color="danger">按钮</Button>
        <Button type="outlined" color="success">按钮</Button>
        <Button type="outlined" color="warning">按钮</Button>
        <Button type="outlined" color="info">按钮</Button>
    </div>
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button type="outlined" disabled>按钮</Button>
        <Button type="outlined" disabled color="primary">按钮</Button>
        <Button type="outlined" disabled color="danger">按钮</Button>
        <Button type="outlined" disabled color="success">按钮</Button>
        <Button type="outlined" disabled color="warning">按钮</Button>
        <Button type="outlined" disabled color="info">按钮</Button>
    </div>
```

<ButtonExample type="outlined" />

### Text

```vue
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button type="text">按钮</Button>
        <Button type="text" color="primary">按钮</Button>
        <Button type="text" color="danger">按钮</Button>
        <Button type="text" color="success">按钮</Button>
        <Button type="text" color="warning">按钮</Button>
        <Button type="text" color="info">按钮</Button>
    </div>
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button type="text" disabled>按钮</Button>
        <Button type="text" disabled color="primary">按钮</Button>
        <Button type="text" disabled color="danger">按钮</Button>
        <Button type="text" disabled color="success">按钮</Button>
        <Button type="text" disabled color="warning">按钮</Button>
        <Button type="text" disabled color="info">按钮</Button>
    </div>
```

<ButtonExample type="text" />

<script setup>
import ButtonExample from './ButtonExample.vue'
</script>