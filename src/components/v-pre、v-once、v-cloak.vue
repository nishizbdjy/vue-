<template>
  <div>
      <p v-pre>v-pre{{msg}}</p>
      <br>
      <p>{{age}}</p>
      <p v-once>v-once{{age}}页面一加载渲染一次了</p>
      <input type="text" v-model="age">
      <!-- v-cloak  相当于异步请求数据成功后才渲染 -->
      <!-- 用定时器模拟 -->
  </div>
</template>

<script>
export default {
data(){
    return{
        msg:'跳过渲染',
        age :"渲染一次"
    }
}
}
</script>

<style>

</style>