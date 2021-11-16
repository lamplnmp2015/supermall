<template>
<div class="toast" v-show="isShow">
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
data() {
 return{
   isShow:false,
   message:''
 }
},
props:{
},
components: {
},
//静态
props: {
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  show(message,delay = 1000){
    this.message = message;
    this.isShow = true;
    setTimeout(()=>{
      this.isShow = false;
      this,message =''
    },delay)
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
  .toast{
    width: 150px;
    height: 30px;
    background-color: rgba(73, 68, 68, 0.6);
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    position: fixed;
    z-index: 998;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
</style>
