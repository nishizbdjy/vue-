<template>
  <div>
<input type="text" v-model="mm">
  <p>{{daxie}}</p>
  </div>
</template>

<script>
export default {
data(){
    return{
     mm : '',
    }
},
computed :{
daxie (){
return this.mm.substring(0,1).toUpperCase()+this.mm.substring(1).toLowerCase()
}
}
}
</script>

<style>

</style>