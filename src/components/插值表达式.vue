<template>
  <div>
<p>{{msg}}</p>
<p>{{msg+':拼接字符串'}}</p>
<p>{{msg}}:也是拼接字符串</p>
<p>算法:{{age+1}}</p>
<p>{{'表达式'+age>=18?'成年':'未成年'}}</p>
<p>调用api：{{msg.replace('值','api')}}</p>
  </div>
</template>

<script>
export default {
  data(){
      return {
          msg : '插值表达式值',
          age : 12,
      }
  }
}
</script>

<style>

</style>