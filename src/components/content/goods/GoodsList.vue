<template>
    <div class="goods">
      <goods-list-item v-for="(item,index) in goodsList" class="goods-list-item">
        <div slot="goods" class="goods-slot">
          <a :href="item.link">
          
            <img :src="item.show.img" :style="'width:' + item.show.w*0.57 + 'px;height:'+item.show.h*0.65+'px;border-radius:5px;margin:0 auto'"  alt="">
            <span class = 'price' >{{item.orgPrice}}</span>
            <div class="title">{{item.title}}</div>
          </a>
          
        </div>
      </goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';
export default {
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
   data() {
     
      return {
      }
   },
   components: {
     'goods-list-item':GoodsListItem
   },
   computed: {
   },
   activated() {
   },
  watch: {
  },
  created(){
    console.log(this.goodsList);
  },
  mounted(){
  },
  methods:{
  }


}
</script>
<style scoped>
 .goods{
   /* margin-left:30px; */
   width: 100%;
   display: flex;
   flex-wrap:wrap;
   justify-content: space-around;
 }
 .goods-slot{
   width:100%;
   height:100%;
   flex: 1;
   /* text-align: center; */
 }
 .goods-list-item{
   width: 50%;
   text-align: center;
   }
  .price{
    font-size: 16px;
    color: #F40;
    font-weight: 700;
    float: left;
    
  }
 .title{
  margin: 0 auto;
  width: 93%;
  height: 30px;
  line-height: 15px;
  word-wrap:break-word;
  font-size: 10px;
  text-align: left;
  overflow: hidden;
  text-overflow: clip;
  white-space: wrap;
 }
 
  

  
</style>
