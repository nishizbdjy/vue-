<template>
  <div>
    <p v-bind:class="msg">v-bind:键=值</p>
    <p v-bind:class="'msg'">v-bind:键=值</p>
    <br />
    <!-- css样式的优先级 -->
    <div v-bind:class="{n:true,m : kg}"></div>
    <button @click="kg=!kg">动画{{kg}}</button>
    <div :class="[n, {m:kg}]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "msg",
      age: 12,
      n: "n",
      m: "m",
      kg: false
    };
  }
};
</script>

<style>
.msg {
  color: yellowgreen;
  font-size: 14px;
}
.n {
  width: 200px;
  height: 100px;
  transition: width 1s;
  background-color: red;
}
.m {
  width: 80px;
}

</style>