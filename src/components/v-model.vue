<template>
  <div>
    <input type="text" v-model="obj.name" placeholder="用户名"/>
    <input type="text" v-model="obj.age" placeholder="年龄"/>
    <button @click="login">输出</button>
    <br>
    <input type="text" placeholder="我会变" v-model="f">
    <h2>{{f}}</h2>
  </div>
</template>

<script>
export default {
data(){
    return {
     obj:{
       name : '',
      age : ''
     },
     f:''
    }
    
},
methods : {
    login(){
    console.log(this.obj)
    }
}
}
</script>

<style lang="css" scoped>
h2{
    color: red
}
</style>