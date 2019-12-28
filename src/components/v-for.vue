<template>
  <div>
    <p v-for="(value,index) in arr" :key="index">{{value}}----{{index}}</p>
    <p v-for="(value,key,index) in obj" :key="key">{{value}}--{{key}}--{{index}}</p>
    <br>
    <table>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
      <tr v-for="(value,index) in aobj" :key="index">
          <td >{{value.name}}</td>
          <td>{{value.age}}</td>
          <!-- <td v-for='(v,k) in value' :key='k'>{{v}}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      obj: {
        name: "jack",
        age: 12
      },
      aobj: [
        {
          name: "jack",
          age: 12
        },
        {
          name: "er",
          age: 22
        },
        {
          name: "san",
          age: 32
        }
      ]
    };
  }
};
</script>

<style>
</style>