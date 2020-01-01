<template>
  <div>
<input type="text" v-zdyzl="'red'">
  </div>
</template>

<script>
export default {
data(){
    return{
   color : ''
    }
},
directives : {
zdyzl:{   //el :元素 biding : 参数
 inserted(el,binding){//钩子函数
 binding.value = binding.value || 'red'
      el.style.color =binding.value
 }
}
}
}
</script>

<style>

</style>