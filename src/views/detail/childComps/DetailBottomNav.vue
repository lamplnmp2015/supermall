<template>
<div class="bottom-bar">
  <div class=" bar-item bar-left">
    <div class="bar-item" @click="itemClick('service')">
      <i class="icon service" ref="service"></i>
      <span class="text">客服</span>
    </div>
    <div  class="bar-item"  @click="itemClick('shop')">
      <i class="icon shop" ref="shop"></i>
      <span class="text">店铺</span>
    </div>
    <div  class="bar-item "  @click="itemClick('select')">
      <i class="icon select" ref="select"></i>
      <span class="text">收藏</span>
    </div>
  </div>
  
  <div class="bar-item bar-right">
    <div class="cart" @click='joinCart'>加入购物车</div>
    <div class="buy">购买</div>
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
  joinCart(){
    console.log('加入购物车');
    this.$emit('joinCart')
  },
  itemClick(item){
    switch(item){
      case 'service':
        break;
      case 'shop':
        break;
      case 'select':
        if(this.$refs.select.style.backgroundPositionY ==''){
          this.$refs.select.style.backgroundPositionY ='-26px';
        }else{
          this.$refs.select.style.backgroundPositionY =''
        }
        
        break;
    }
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
  .bottom-bar{
    width: 100%;
    height: 49px;
    line-height: 49px;
    position: fixed;
    bottom:0px;
    text-align: center;
    z-index: 998;
    
    background-color: #fff;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
  }
  .bar-item{
    flex: 1;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 22px;
    
    align-items:center;
  }
  .bar-left .bar-item{
    flex-flow: column;
  }
  .bar-left .text{
    font-size: 13px;
  }
   .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png")0 0/100%;
  }
  .bar-left .service{
    background-position: 0 -53px;
  }
  .bar-left .shop{
    background-position: 0 -98px;
  }
   .bar-left .select{
    background-position: 0 0px;
  }
  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }
  .bar-right div{
    flex: 1;
  }
  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }
  span{
    display:block;
    /* float: left; */
  }
  .bar-right .buy{
    background-color: #f69;
  }
</style>
