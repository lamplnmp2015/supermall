<template>
<div class="itemInfo">
  <div class="goodsDesc">{{itemInfo.title}}</div>
  <div class="price">
    <span class="spanPrice">{{itemInfo.price}}</span>
    <span class="heightPrice">{{itemInfo.highPrice}}</span>
    <span class="activityPrice">活动价</span>
  </div>
  <div class="footer" >
    <span v-for="(item, index) in columns">{{item}}</span>
    <!-- <span>收藏</span>
    <span>退货补运费</span> -->
  </div>
  <!-- <div class="footerBottom">
    <span class="bottomSpan">
      <img src="~assets/img/detail/checkSign.svg" alt="">
      <div style="height:20px;display:inline-block;line-height:20px;">7天无理由退货</div>
    </span>
    <span class="bottomSpan">
      <img src="~assets/img/detail/checkSign.svg" alt="">
      <div style="height:20px;display:inline-block;line-height:20px;">全国包邮</div>
    </span>
    <span class="bottomSpan">
      <img src="~assets/img/detail/checkSign.svg" alt="">
      <div style="height:20px;display:inline-block;line-height:20px;">72小时发货</div>
    </span>
  </div> -->
  
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
  itemInfo:{
    type:Object,
    default:{

    }
  },
  columns:{

  },
  services:{

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
  .itemInfo{
    width: 95%;
    margin: 5px auto;
    
  }
  .price{
    min-width:40%;
    height: 100%;
    display: flex;
    margin: 10px auto;
    float: left;
    display: flex;
    
  }
  .price span{
    text-align: center;
    flex: 1;
  }
  .spanPrice{
    color: var(--color-tint);
    flex-grow: 1;
  }
  .heightPrice{
    padding-top: 4px;
    color: lightgrey;
    font-size: 16px;
    text-decoration:line-through;
    flex-grow: 1;
  }
  .activityPrice{
    font-size: 10px;
    width: 42px;
    text-align: center;
    height: 16px;
    line-height: 16px;
    color: #fff;
    border-radius: 5px;
    background-color: var(--color-tint);
    /* position: absolute; */
    flex-grow: 1;
  }
  .goodsDesc{
    font-size: 16px;
    margin-top: 20px;
  }
  .footer{
    height: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    justify-content: space-between;
    clear: both;
    /* box-shadow: 0px 1px 1px #888888; */
    border-bottom: 2px solid #eee
  }
  .footer span{
    font-size:12px ;
    text-align: center;
    align-items: center;
  }
  .footerBottom{
    height: 3rem;
    line-height: 3rem;
    display: flex;
    justify-content:space-between;
    font-size: 16px;
    vertical-align: middle;
    border-bottom: 2px solid #eee
  }
  .footerBottom > span{
    /* height: 25px;
    line-height: 25px; */
    align-items:center;
    text-align: center;
    font-size: 12px;
  }
  .footerBottom img{
    width: 1rem;
    height: 1rem;
    vertical-align: text-bottom;
    margin: 0px auto;
  }
  .bottomSpan > span{
    height: 20px;
    line-height: 20px;
    
  }
</style>
