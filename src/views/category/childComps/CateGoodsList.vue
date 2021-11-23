<template>
<div class="content">
  
  <li  class="li" v-for="(item,index) in firstSub" >
    <a :href="item.link">
      <div>
        <img v-lazy="item.image" alt="" @load="imgLoad">
      </div> 
      <div class="title">{{item.title}}</div>
    </a>
    
  </li >
  <li class="li" v-for="(item,index) in secondSub">
    {{item.title}}
  </li>
</div>
</template>

<script>
import {getFirstCate} from 'network/home'
export default {
data() {
 return{
 
 }
},
components: {
},
//静态
props: {
  firstSub:{

  },
  secondSub:{}
},
//对象内部的属性监听，也叫深度监听
watch: {
  firstSub(n,o){
    o = n
  }
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  imgLoad(){
    this.$emit('imgLoad');
  },
  liClick(key){
    console.log(key);
  }
},
//请求数据
created() {
},
mounted() {
}
}
</script>

<style scoped>
.content{
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-content: flex-start;
  padding-bottom: 20px;
  border-bottom:solid #E5E5E5 1px
}
.content::after{
  height: 0;
  width: 30%;
  /* min-width: 345px; */
  content: "";
}
  .li{
    display: flex;
    flex-direction: column;
    width: 30%;
    list-style: none;
    color: #666666;
    vertical-align: middle;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  .li > div{
    width: 100%;
  }
  .li img{
    /* width: 80px; */
    width: 80%;
  }
  .title{
    font-size: 12px;
  }
</style>
