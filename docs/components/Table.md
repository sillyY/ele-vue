# Table 表格

## 基础表格

::: demo
<template>
    <button class="animated shake infinite" @click="onClick">Click me!</button>
</template>

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>

<style>
button {
    color: blue;
}
</style>
:::