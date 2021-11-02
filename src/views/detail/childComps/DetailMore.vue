<template>
<div class="top">
  <p class="detailKey">{{detailInfo.key}}</p>
  
  <div v-for="(item, index) in detailInfo.list" class="imgDiv" id="index">
    <viewer><img :src="item" alt="" @load='detailMoreInm'></viewer>
  </div>
</div>
</template>

<script>
export default {
data() {
 return{
 
 }
},
components: {
  // 'viewer':Viewer
},
//静态
props: {
  detailInfo:{
    type:Object,
    default:{

    }
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
  detailMoreInm(){
    this.$emit('swiperImageLoad2')
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
  .imgDiv{
    width: 95%;
    margin: 10px auto;
  }
  .imgDiv img{
    width: 100%;
  }
  .detailKey{
    width: 95%;
    margin:0 auto;
    font-size:16px;
  }
</style>
