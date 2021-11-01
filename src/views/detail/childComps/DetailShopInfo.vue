<template>
<div class="content">
  <div class="service" >
    <span class="bottomSpan" v-for="(item, info) in shopInfo.services">
      <div class="iconImg">
        <img :src="item.icon?item.icon:'//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png'" alt="">
      </div>
      <div class="serviocesName" style="height:20px;display:inline-block;line-height:20px;">{{item.name}}</div>
    </span>
  </div>
  <div class="top">
    <div class="shopLogo">
      <img :src='shopInfo.shopLogo' alt="">
    </div>
    <div class="shopName">
      {{shopInfo.name}}
    </div>
  </div>
</div>
</template>

<script>
export default {
data() {
 return{
   shopLogo:''
 }
},
components: {
},
//静态
props: {
  shopInfo:{
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
  width: 95%;
  margin: 0 auto;
}
  .top{
    /* width: 30%; */
    display: flex;
    float: left;
    margin: 20px auto;
    justify-content: space-around;
    /* justify-content: space-evenly; */
  }
  .top div{
    align-items: center;
  }
  .shopLogo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    
  }
 
  .shopLogo img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: text-bottom;
  }
  .shopName{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    margin-left: 5px;
  }
  .service{
    width: 100%;
    height: 60px;
    /* line-height: 60px; */
    display:flex;
    justify-content: space-around;
    border-bottom: 2px solid #eee;
  }
  .service div{
    display: inline-block;
  }
  .bottomSpan{
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
  .bottomSpan img{
    width: 15px;
    height: 15px;
    vertical-align:middle;
  }
  .iconImg  ,.serviocesName{
    align-items: center;
    height: 20px;
    line-height: 16px;
  }
  .serviocesName{
    font-size: 12px;
  }
</style>