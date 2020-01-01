<template>
  <div>
<!-- 页面一打开input自动获取焦点 -->
<input type="text" ref="bd">
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
//mounted钩子函数 页面加载渲染完成执行
mounted(){
    //通过this.$refs.db 获取元素
   this.$refs.bd.focus()
}
}
</script>

<style>

</style>