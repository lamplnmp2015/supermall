
<template>

<div class="content">
  <waterfall :col="2"  :data="secondSub">
  <li  class="li" v-for="(item,index) in secondSub" >
    <a :href="item.link">
      <div>
        <img v-lazy="item.img" alt="" @load="imgLoad">
      </div> 
      <div class="title">{{item.title}}</div>
    </a>   
  </li>
  </waterfall>
</div>

</template>

<script>
export default {
data() {
 return{
 
 }
},
components: {
},
//静态
props: {
  secondSub:[]
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  imgLoad(){
     this.$emit('imgLoad');
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
    /* width: 100%; */
    list-style: none;
    color: #666666;
    vertical-align: middle;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    overflow: hidden;
  }
  .li > div{
    width: 50%;
  }
  .li img{
    width: 90%;
    border-radius:10px ;
    
  }
  .title{
    font-size: 12px;

     /* white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis; */
  }
</style>
