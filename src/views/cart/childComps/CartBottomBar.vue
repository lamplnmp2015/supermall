<template>
<div class="bottom-bar">
  <div class="left" @click="allSelect()">
    <div :class="isChecked==true?'active':'left-left'" ref="select" ></div>
    <div class="left-right">全选</div>
  </div>
  <div class="center">
  合计:￥{{totalPrice}}
  </div>
  <div class="right">去计算({{totalCount}})</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
data() {
 return{
  //  isChecked:true
 }
},
components: {
},
//静态
props: {
},
updated(){
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
  ...mapGetters({
    'cartList':'cartList'
  }),
  isChecked(){
    // return this.$store.state.isAllChecked
    //对数值取反为false
    if(this.cartList.length == 0) return false
    return !(this.cartList.filter(item=>!item.isChecked).length)
  },
  totalPrice(){
    return this.cartList.filter((item)=>{
      return item.isChecked == true
    }).reduce((preValue,item)=>{
      console.log(item.price.replace(/[^0-9.]/ig,""));
      console.log(typeof(Number(item.count)));
      return (Number(preValue)+Number(item.price.replace(/[^0-9.]/ig,"")*item.count)).toFixed(2)
    },0)
  },
  totalCount(){
    return this.cartList.filter((item)=>{
      return item.isChecked == true;
    }).reduce((preValue,item)=>{
      return preValue+item.count
    },0)
  },

},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  allSelect(){
    this.$store.state.isAllChecked = !this.$store.state.isAllChecked;
    for(let item of this.cartList){
        item.isChecked = this.$store.state.isAllChecked
    }

    console.log(this.cartList);
  }
},
//请求数据
created() {
  // this.isChecked = this.$store.state.isAllChecked
},
mounted() {
}
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  justify-content: space-around;
  padding: 0 0px 0 5px;
  height: 40px;
}
.left{
  padding-right: 5px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left div{
  /* flex: 1; */
  align-items: center;
}
  .left-left{
    /* li div:first-child{  */
    width: 20px;
    height: 20px;
    /* line-height: 20px;
    text-align: center;
    vertical-align: middle; */
    border-radius:50%;
    border:2px solid rgba(124, 121, 121, 0.281);
    flex-shrink:0;
  }
  .active{
    width: 20px;
    height: 20px;
    border-radius:50%;
    flex-shrink:0;
    background:url('~assets/img/cart/gou.svg') no-repeat;
    background-position:-4.5px -5px;
    background-size:150% 150%;
  }
  .center{
    flex: 1;
    line-height: 40px;
    padding-left: 20px;
  }
  .right{
    line-height: 40px;
    color: #fff;
    background-color: crimson;
  }
</style>
