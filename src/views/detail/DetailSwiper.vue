<template>
<!-- <div> -->
<swiper class="detail_swiper">
  <swiper-item  v-for="(item, index) in swiperdata" >
    <img :src="item" alt="" @load = 'imgLoad'>
  </swiper-item>
</swiper>
<!-- </div> -->
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'


export default {
data() {
 return{
 
 }
},
props:{
  swiperdata:{
    type:Array,
    default:[]
  },
  // shopInfo:{
  //   type:Object,
  //   default:{
      
  //   }
  // }
},
components: {
  Swiper,
  SwiperItem

},
//静态
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  imgLoad(){
     this.$emit('swiperImageLoad')
   
  }
},
//请求数据
created() {
  console.log(this.cdata);
},
mounted() {
}
}
</script>

<style scoped>
.detail_swiper{
  height: 15rem;
  overflow: hidden;
}
</style>

