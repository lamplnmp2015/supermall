<template>
<div class="content">
  <div class="service" >
    <span class="bottomSpan" v-for="(item, info) in shopInfo.services">
      <div class="iconImg">
        <img :src="item.icon?item.icon:'//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png'" alt=""  @load='imgLoad1'>
      </div>
      <div class="serviocesName" style="height:20px;display:inline-block;line-height:20px;">{{item.name}}</div>
    </span>
  </div>
  <div class="top">
    <!-- <a :href="shopInfo.shopUrl"> -->
      <div class="shopLogo">
        <img :src='shopInfo.shopLogo' alt="" @load="imgLoad1">
      </div>
      <div class="shopName">
        {{shopInfo.name}}
      </div>
    <!-- </a> -->
    
  </div>
  <div class="middel">
    <div class="middelLeft">
      <div class="leftLeft">
        <div style="padding-bottom:2px;">{{shopInfo.cSells}}</div> 
        总销量
      </div>
      <div class="leftRight">
        <div style="padding-bottom:2px;">{{shopInfo.cGoods}}</div> 
        全部宝贝
      </div>
    </div>
    <div class="middelRight">
      <div v-for="(item, index) in shopInfo.score" class="score">
        <span>{{item.name}}</span>
        <span :class="item.score >= 4.9?'scoreRed':'scoreGreen'">{{item.score}}</span>
        <span v-if="item.score >= 4.9" style="background-color:#FF0036;color:#fff;height:15px;font-size:12px;line-height:15px;border-radius:2px;">
          高
        </span>
        <span v-else style="background-color:#280;color:#fff;height:15px;font-size:12px;line-height:15px;border-radius:2px;">
          低
        </span>
      </div>
    </div>
    
  
  
  
  </div>
  <div class="enterShop">
    <a :href="shopInfo.shopUrl">
      <div>进店逛逛</div>
    </a>
    
  </div>
  <!-- <div style="height:20px;"></div>
  <div style="height:20px;"></div> -->

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
  imgLoad1(){
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
.enterShop{
  width: 95%;
  /* border:1px solid red; */
  margin: 20px auto;
  display: flex;
  justify-content: center;
}
.enterShop div{
  width: 200px;
  height: 30px;
  line-height: 30px;
  background-color: #eee;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
}
  .scoreRed{
    width: 30px;
    color: #FF0036;
  }
  .scoreGreen{
    width: 30px;
    color: #280;
  }
  .score{
    height: 22px;
    display: flex;
    justify-content: space-around;
  }
.middel{
  display: flex;
}
.middelLeft{
  width: 50%;
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  border-right: 2px solid #eee;
  font-size:16px ;
  
}
.middelRight{
  width: 50%;
  line-height:20px;
  display: flex;
  flex-flow: column;
  /* text-align: center; */
  font-size:16px ;

}
.leftLeft, .leftRight{
  text-align: center;
  display: inline-block;
}
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
  .top a{
    width: 100%;
  }
  .shopLogo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    vertical-align: middle;
    border:2px solid #eee;
    display: table;
  }
 
  .shopLogo img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
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
  .middel{
    clear: both;
  }
</style>