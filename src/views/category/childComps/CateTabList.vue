<template>
    <div  class="content">
      <li :class="index==currentIndex?'active':'li'" v-for="(item, index) in leftInfo" @click='liClick(index)'>{{item.title}}</li>
    </div>
</template>
<script>
import Scroll from 'components/common/Scroll/Scroll.vue'

export default {
data() {
 return{
   currentIndex:0
 }
},
components: {
  Scroll
},
//静态
props: {
  leftInfo:{
    type:Array,
    default(){
      return []
    }
  }
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
  // isChecked(){
  //   return (index)=>{
  //     if(index == this.currentIndex){
  //       return true
  //     } else{
  //       return false
  //     }
  //   }
  // }
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  liClick(index){
    this.currentIndex = index
    this.$emit('liClick', this.currentIndex);
  },
  
},
//请求数据
created() {
  console.log('leftInfo');
  this.labData = JSON.parse(JSON.stringify(this.leftInfo))
  
  
},
mounted() {
}
}
</script>

<style scoped>
  .li{
    /* width: 20%; */
    list-style: none;
    color: #666666;
    /* text-align: center; */
    line-height: 50px;
    text-align: center;
    background-color: #F6F6F6;
    font-size: 16px;
  }
  .active{
     /* width: 20%; */
    list-style: none;
    color: #666666;
    /* text-align: center; */
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
  }
</style>
