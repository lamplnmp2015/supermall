<template>
<div class="cart-list">
    <li v-for="(item, index) in cartList">
      <div :class="item.isChecked==true?'active':'left'" ref="select" @click="itemSelect(item.iid,index)">
      </div>       
        <!-- <img src="~assets/img/cart/gou.svg" alt=""> -->       
      <div class="right" @click="itemInfo(item.iid)">
        <div class="right-left">
          <img :src="item.image" alt="" @load='imgLoad'>
        </div>
        <div class="right-right">
          <div class="right-top">{{item.title}}</div>  
          <div class="right-middle">{{item.desc}}</div>  
          <div class="right-bottom">
            <div class="bottom-left">{{item.price}}</div>  
            <!-- <div class="bottom-right">x{{item.count}}</div>   -->
            <div class="bottom-right">
              <div class="button button1" type="button"  @click.stop="countDesr(index)">-</div>
              <div class="buttonCount" @click.stop='showInput(index)'>{{item.count}}</div>
              <div class="button button2" type="button" @click.stop="countInsr(index)">+</div>  
            </div>  
          </div>  
        </div>  
      </div>
    </li>
    <div class="cartListBottom" v-if="cartList.length == 0">这里空空如也哦~，赶快去添加商品吧！</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/Scroll/Scroll'
export default {
data() {
 return{
  isActive:false
 }
},
components: {
  Scroll
},
//静态
props: {
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
  ...mapGetters({
    'cartList':'cartList'
  })
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  itemSelect(iid,index){
      this.cartList[index].isChecked = !this.cartList[index].isChecked;
      //在vuex中添加isAllChecked,在全选computed判断isAllChecked，但是因为用到两个遍历性能不太理想
      //后改为直接在全选computed用过滤函数对item的ischecked新数组的长度进行判断，大于零说明存在false
      // let arrNew = this.cartList.map(item => {
      //   return item.isChecked;
      // })
      // if(arrNew.includes(false)){
      //   this.$store.state.isAllChecked = false
      // }else{
      //   this.$store.state.isAllChecked = true
      // }
     
  },
  imgLoad(){
    this.$emit('imgLoad');
  },
  itemInfo(iid){
    this.$router.push({
        path:'/detail',
        query:{
          iid:iid,
          random:Math.random()*10
        }
      })
  },
  countDesr(index){
    if(this.cartList[index].count <= 1) return false;
    this.cartList[index].count--
  },
  countInsr(index){
    this.cartList[index].count++
  },
  showInput(index){
    this.$emit('showInput',index);
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
  li{
    padding: 10px 0 10px 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 4px solid #eee;
  }
  .cart-list{
    width: 98%;
    margin: 0px auto;
  }
  .left{
    /* li div:first-child{  */
    width: 20px;
    height: 20px;
    /* line-height: 20px;
    text-align: center;
    vertical-align: middle; */
    border-radius:50%;
    border:2px solid #eee;
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
  .left img{
    width: 20px;
    height: 20px;
    /* vertical-align: middle; */
  }
  .right{
    display: flex;
    justify-content: space-between;
  }
  .right-left .right-right{
    flex: 1;
    align-items: center;
    text-align: center;
  }
  .right-left img{
    width: 80px;
    height: 100px;
  }
  .right-right{
    display: flex;
    flex-flow: column;
    line-height: 33px;
    padding-left: 10px;
  }
  .right-bottom{
    display: flex;
    justify-content: space-between;
  }
  .bottom-left{
    color: var(--color-tint);
  }
  .right-top{
    width:17em;
    overflow: hidden;
    font-size: 15px;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .right-middle{
    width:21em;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: darkgrey;
    font-size: 12px;
    text-align: center;
  }
  .right-bottom{
    width:15em;
  }
  .bottom-right{
    border: 1px solid #eee;
    border-radius:5px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button{
    
    flex: 1;
    /* height: 15px; */
    width: 40px;
    font-size: 25px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    /* line-height: 3px; */
  }
  .button1{
    border-right: 1px solid #eee;
  }
  .button2{
    border-left: 1px solid #eee;
  }
  .buttonCount{
    width: 30px;
    text-align: center;
    margin: 0 5px 0 px;
  }
  .cartListBottom{
    width: 95%;
    margin: 10px auto;
    text-align: center;
    color: rgba(197, 193, 193, 0.89);
    font-size: 16px;
  }
</style>
