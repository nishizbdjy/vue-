<template>
  <div>
    <a href="#" v-on:click="w">你点我啊</a>
    <br />
    <a href="http://www.baidu.com" @click.prevent="w">事件修饰符</a>
    <input type="text" @keydown.13="w('fdrfd',$event)" />
    <br>
    <button @[msg]="w">双击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "dblclick"
    };
  },
  methods: {
    w(gh, d) {
      console.log(gh);
      console.log(d);
      console.log("我被点了");
    }
  }
};
</script>

<style>
</style>