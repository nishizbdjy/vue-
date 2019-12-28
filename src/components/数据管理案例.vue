<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text"/>
      品牌名称:
      <input type="text"/>
      <input type="button" value="添加"  />
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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <a href="#">删除</a>
          </td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tianjia: {
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
