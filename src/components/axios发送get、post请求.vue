<template>
  <div>
    <button @click="fsget">点击发送get请求</button>
    <p>{{get}}</p>
    <button @click="fspost">点击发送poet请求</button>
    <p>{{post}}</p>
  </div>
</template>

<script>
import axios from "axios"; //引入axios
export default {
  data() {
    return {
      get: '',
      post: ''
    };
  },
  methods: {
    //get请求
    fsget() {
    //   axios
    //     .get("http://127.0.0.1:3060/getRandomJocke")
    //     .then(res => {
    //       this.get = res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
        //      axios
        // .get("http://127.0.0.1:3060/getHeroById?id=102")
        // .then(res => {
        //   this.get = res.data;
        // })
        // .catch(err => {
        //   console.log(err);
        // });
         axios
        .get("http://127.0.0.1:3060/getHeroById",{
            params : {
                id : 102
            }
        })
        .then(res => {
          this.get = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  post请求
    fspost() {
      axios
        .post("http://127.0.0.1:3060/getAllHero",{})
        .then(res => {
          this.post = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>