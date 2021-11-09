<template>
<div class="content">
  <div class="tableDiv">
    <table class="table" style="margin-left:-8px;">
      <tr v-for="(item, index) in tables[0]">
        <td v-for="(item1, index) in item">{{item1}}</td> 
      </tr>
      <tr  v-for="(item, index) in tables[1]">
        <td v-for="(item1, index) in item">{{item1}}</td> 
      </tr>
    </table>
  </div>
  <div class="infoSet" >
    <table class="table">
      <tr v-for="(item, index) in itemParams">
        <td class="tdKey">{{item.key}}</td>
        <td class="tdVal">{{item.value}}</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
import TabBar from '../../../../../../../HYMall-master/HYMall-master/src/components/common/tabbar/TabBar.vue'
export default {
data() {
 return{
 
 }
},
components: {
TabBar
},
//静态
props: {
  tables:{
    type:Array,
    default(){
      return []
    }
  },
  itemParams:{

  }
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
},
//请求数据
created() {
 
},
mounted() {
  
}
}
</script>

<style scoped>
  .tableDiv{
    width: 100%;
    /* margin: 10px auto; */
    /* margin-left: -20px; */
    text-align: center;
  }
  .table{
    width: 100%;
    border-collapse: collapse;
    border-spacing:0px 10px;
  }
  .table tr{
    border-bottom: 1px solid #eee;
  }
  .table tr td{
    width: 50px;
    height: 30px;
    line-height: 30px;
  }
   .infoSet table tr td:nth-child(n+2){
    color: var(--color-high-text);
  }
  .infoSet table tr:nth-last-child(1){
    border-bottom:1px solid #fff;
  }
  .infoSet{
    width: 95%;
    margin: 10px auto;
   
    /* justify-content: space-between; */
  }
  .tdKey{
    width: 100px;
  }
  .tdVal{
    word-wrap:break-word;
    /* width: 100%; */
  }
  .content{
    border-bottom: 3px solid #eee;
  }
</style>
