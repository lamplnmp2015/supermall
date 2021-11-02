<template>       
<div class = 'wrapper' ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'
export default {
name:'Scroll',
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
  },
  pullUpLoad:{
    type:Boolean,
    default:false
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
  },
  finishPullUp(){
    this.scroll.finishPullUp()
  },
  refresh() {
    // this.scroll 是创建的的 better-scroll 实例 调用其 refresh 方法进行刷新
    this.scroll.refresh()
    console.log('refresh');
  }
},
//请求数据
created() {
},
mounted() {
  this.scroll = new BScroll(this.$refs.wrapper,{
     click:true,
     scrollX:true,
     probeType:this.probeType,
    //  pullUpLoad:this.pullUpLoad
    pullUpLoad:{
      threshold:30
    }
  })
  //实时位置
  if(this.probeType == 2 || this.probeType == 3){
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll', position);
    })
  }
  
  //下拉事件
  if(this.pullUpLoad !=null){
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    })
    this.scroll.refresh()
  }
  
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
   /* height: calc(100%-100px); */
   /* height: 1000px; */
   /* height: 100%; */
  

    /* position: absolute;
    top: 10px;
    bottom: 49px;
    right: 0;
    left: 0; */
    
 }
</style>
