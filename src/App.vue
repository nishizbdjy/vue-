<template>
<div class="app">
<h1> {{msg}}</h1>
</div>
</template>

<script>

export default {
data(){
    return {
        msg : '单文件组件的事例'
    }
}
}
</script>

<style lang="less" scoped>
.app{
    color: #fc1;
    font-size:14px
}
</style>
