<template>
  <div>
    <input type="text" v-model="bianhua" />
    <p>新值:{{xin}}</p>
    <p>旧值:{{jiu}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bianhua: '',
      xin: '',
      jiu: ''
    };
  },
  //侦听器属性能侦听异步请求变化的数据
  watch: {
    //侦听的属性名
    bianhua(xin, jiu) {
      this.xin = xin;
      this.jiu = jiu;
    }
  }
};
</script>

<style>
</style>