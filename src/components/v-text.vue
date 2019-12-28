<template>
  <div>
      <p v-text="msg"></p>
      <p v-text="age+1"></p>
      <p v-text="age+'拼接'"></p>
      <p v-text="age<=12?'未成年':'成年'"></p>
      <p v-text="msg.toUpperCase()"></p>
  </div>
</template>

<script>
export default {
data(){
    return {
        msg : 'v-text',
        age : 12,
    }
}
}
</script>

<style>

</style>