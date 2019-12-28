<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="shuju.id"/>
      品牌名称:
      <input type="text" v-model="shuju.bname"/>
      <input type="button" value="添加"  @click="tianjia"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" />
    </div>
    <div>
      <table class="tb">
        <tr>
          <th>编号</th>
          <th>品牌名称</th>
          <th>创立时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="(value,index) in arr" :key="index">
          <td>{{value.id}}</td>
          <td>{{value.bname}}</td>
          <td>{{value.btiem | guolvqi}}</td>
          <td>
            <a href="#" @click="shanchu(index)">删除</a>
          </td>
        </tr>
         <tr>
             <td colspan="4" v-if="arr.length===0">数据没咯</td>
         </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shuju: {
        id: "",
        bname: "",
        btiem: new Date()
      },
      arr: [
        {
          id: 1,
          bname: "前端",
          btiem: new Date()
        },
        {
          id: 2,
          bname: "Java",
          btiem: new Date()
        },
        {
          id: 3,
          bname: "php",
          btiem: new Date()
        },
        {
          id: 4,
          bname: "C++",
          btiem: new Date()
        }
      ]
    };
  },
  methods: {
      tianjia(){       //使用展开运算符
          this.arr.push({...this.shuju})
      },
      shanchu(index){
          this.arr.splice(index,1)
      }
  },
  filters : {
    guolvqi(tiem){
    let nian = tiem.getFullYear()//年
    let yue = tiem.getMonth()+1//月
    let ri = tiem.getDate()//日
    let riqi = `${nian}-${yue}-${ri}`
    return riqi
    }
  }
};
</script>

<style lang='less' scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
