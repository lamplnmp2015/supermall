<template> 
    <div class="cartContent" >
      <nav-bar class="nav_bar">
        <div slot="center">购物车({{length}})</div>
      </nav-bar>
      <div class="countInput" v-if="isInputShow">
        <div class="inputTop">请输入内容</div>
        <div  class="inputMiddle"><input type="text" :value="count" ref="input" @input='inputValue'></div>
        <div  class="inputBottom">
          <span @click="cancelInput()">取消</span>
          <span @click="confirmInput()">确定</span>
        </div>
      </div>
      <scroll class="cart-scroller" ref="scroller">
        <cart-list @imgLoad='imgLoad' @showInput='showInput'></cart-list>
      </scroll> 
      <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/NavBar/NavBar' 
import Scroll from 'components/common/Scroll/Scroll' 
import CartList from 'views/cart/childComps/CartList'
import {mapGetters} from 'vuex'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
   data() {
      return {
        cartData:[],
        count:1,
        isInputShow:false,
        itemIndex:0
      }
   },
   activated() {
     this.$refs.scroller.refresh()
   },
 watch: {
},
components:{
  NavBar,
  Scroll,
  CartList,
  CartBottomBar
},

created(){
  this.cartData = this.$store.state.cartInfo;
  console.log(this.cartData);
},
mounted(){
},
methods:{
  imgLoad(){
    this.$refs.scroller.refresh()
    console.log('加载完成');
    console.log(this.$refs.scroller);
  },
  inputValue(info){
    console.log(info.data);
  },
  cancelInput(){
    this.isInputShow = false
  },
  confirmInput(){
    var pattern = /^\+?[1-9][0-9]*$/;
    console.log('2334');
    console.log(this.$refs.input.value);
    console.log(pattern.test(this.$refs.input.value));
    if(!pattern.test(this.$refs.input.value)){ this.$myToast.show('请填写大于0的纯数字',2000); return false;}
    // console.log(inputContent);
    console.log(this.cartList[this.itemIndex]);
    this.$myToast.show('修改成功');
    this.cartList[this.itemIndex].count = Number(this.$refs.input.value);
    this.isInputShow = false;
  },
  showInput(index){
    this.isInputShow = true;
    this.itemIndex = index;
    console.log('index11');
    console.log(index);
    console.log(this.$refs.input);
    this.count = this.cartList[index].count;
    this.$nextTick((x)=>{ //正确写法
      this.$refs.input.focus();
    })
  }
},
computed:{
  ...mapGetters({
    'length':'cartLength',
    'cartList':'cartList'
  }),
  // cartLength(){
  //   return this.$store.getters.cartLength
  // }
}


}
</script>
<style scoped>
.cartContent{

}
.nav_bar{
  font-weight: 700;
  z-index: 998;
}
.select{
 
  width:20px;
  height:20px;
  padding-right: 5px;
  border-radius: 50%;
  background: red;
  flex:0 0 20px;
}
.item{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.itemLeft{
  height: 40%;
  width:50%;
  display: flex;
  justify-content:space-around;
  vertical-align: middle;
  /* height: 50px;
  width: 50px; */
}
.itemLeft img {
  flex: 1;
  height:40%;
  width:100px;
}
.itemRight{
  height: 100px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.text{
  width: 250px;
  flex: 1;
  overflow:hidden;
  align-items: center;
  text-overflow: ellipsis;
  white-space:nowrap;
  
}
.text::before{
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}
.price{
  display: flex;
  justify-content: space-between;
  color: var(--color-tint);
  /* text-align: center; */
}
.price span{
  flex: 1;
  align-items: center;
}

.cart-scroller{
  margin: 0px auto;
  height: calc(100% - 131px);
  position: absolute;
  top: 43px;
  bottom: 48px;
  right: 0;
  left: 0; 
}
.bottom-bar{
  position: fixed;
  bottom: 48px;
  left: 0px;
  right: 0px;
  height: 40px;
  background-color: rgba(238, 238, 238);
}
.countInput{
  width: 300px;
  height: 150px;
  border-radius: 15px;
  position: fixed;
  z-index: 999;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
  background: #eee;
  padding: 10px 10px 10px 10px;
  /* text-align: center; */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* align-items: center; */
}
.countInput div{
  height: 40px;
  /* line-height: 40px; */
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* align-items: center;  */
}
.inputMiddle{
  border-bottom: 1px solid rgb(184, 184, 184);
}
.inputMiddle input{
  background:none;  
	outline:none;  
	border:none;
}
.inputBottom{
  /* display: flex;
  justify-content: center;
  flex-direction:row-reverse */
}
.inputBottom span{
  margin: 0 auto;
}
</style>
