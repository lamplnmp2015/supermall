<template>
<div class="back-top">
  <img src="~assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
data() {
  return {
    
  }
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
},
//请求数据
created() {
},
mounted() {
}
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 10;
  }

  .back-top img {
    width: 41px;
    height: 41px;
  }
</style>
