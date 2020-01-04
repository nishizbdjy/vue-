<template>
  <div>
<button>点击发送get请求</button>
<p>{{get}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
  get : ''
    }
},
methods :{
    fsget(){
        axios({
            method:'get',
            url : '/getHeroById',
            baseURL : 'http://127.0.0.1:3060',
            params : {
                id : 102
            }
        })
          .then(res => {
          this.get = res.data;
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    }
}
}
</script>

<style>

</style>