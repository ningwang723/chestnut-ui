<template>
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button :type="type">按钮</Button>
        <Button :type="type" color="primary">按钮</Button>
        <Button :type="type" color="danger">按钮</Button>
        <Button :type="type" color="success">按钮</Button>
        <Button :type="type" color="warning">按钮</Button>
        <Button :type="type" color="info">按钮</Button>
    </div>
    <div style="margin-bottom: 16px; display: flex; gap:16px">
        <Button :type="type" disabled>按钮</Button>
        <Button :type="type" disabled color="primary">按钮</Button>
        <Button :type="type" disabled color="danger">按钮</Button>
        <Button :type="type" disabled color="success">按钮</Button>
        <Button :type="type" disabled color="warning">按钮</Button>
        <Button :type="type" disabled color="info">按钮</Button>
    </div>
</template>
<script>
import { Button } from '../../../src/index'
export default {
    name: 'ButtonExample',
    components: {
        Button,
    },
    props: {
        type: String
    }
}
</script>