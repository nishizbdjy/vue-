<template>
  <div>
    <button @click="kg=!kg">点击关灯</button>
    <p v-show="kg">{{kg}}</p>
    <p v-if="kg">{{kg}}</p>
    <br>
    <input type="text" v-model="fs">
    <br>
    <p v-if="fs>=90">a</p>
    <p v-else-if="fs>=80">b</p>
    <p v-else-if="fs>=70">c</p>
    <p v-else-if="fs>=60">d</p>
    <p v-else>e</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kg: true,
      fs:0
    };
  }
};
</script>

<style>
</style>