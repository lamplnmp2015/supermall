<template>       
<div class = 'wrapper' ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
data() {
  return{
    scroll:{
      type:Object,
      default() {
          return {}
      }
    },
    

  }
},
components: {
},
//静态
props: {
  probeType:{
     type:Number,
     default:0 
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
  scrollTo(x, y, time=300) {
    this.scroll.scrollTo(x, y, time)
    console.log('22222');
    
  },
},
//请求数据
created() {
},
mounted() {
  this.scroll = new BScroll(this.$refs.wrapper,{
     click:true,
     probeType:this.probeType
  })
  this.scroll.on('scroll',(position)=>{
    // console.log(position);
    this.$emit('scroll', position);
  })
  
}
}
</script>

<style scoped>
 .wrapper{
   height: 100%;
   overflow: hidden;
   flex: 1;
 }
 .content{
   /* height: calc(100%-93px); */
   /* height: 1000px; */
   /* height: 100%; */
   min-height: 6000px;

    /* position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0; */
    
 }
</style>
