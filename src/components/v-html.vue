<template>
  <div>
      <p v-html="html"></p>
      <p v-html="msg"></p>
      <p v-html="html.toUpperCase()"></p>
      <p v-html="age>12?'大':'小'"></p>
  </div>
</template>

<script>
export default {
data(){
    return {
        html : '<em>html结构</em>',
        msg :'abc',
        age :12
    }
}
}
</script>

<style>

</style>