<template>
   
    <div class="goods" >
      <waterfall :col="2"  :data="goodsList">
      <goods-list-item v-for="(item,index) in goodsList" class="goods-list-item">
        
        <div slot="goods" class="goods-slot" @click="itemClick((item.iid?item.iid:item.item_id))">
          <!-- <a :href="item.link"> -->
            <div class="goodsImgDiv">
              <img @load='imgLoad' v-lazy="showImage(item)" class="goodsImg"  alt="">
            </div>
            <span class = 'price' >{{item.orgPrice}}</span>
            <div class="title">{{item.title}}</div>
          <!-- </a> -->  
        </div>
        
      </goods-list-item>
      </waterfall>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';
export default {
  props:{
    goodsList:{
      // type:Array,
      default(){
        return []
      }
    }
  },
   data() {
     
      return {
        itemGoodsIid:0,
        
      }
   },
   components: {
     'goods-list-item':GoodsListItem
   },
   computed: {
     showImage(){
       return (item)=>{
         return item.image || item.show.img
       }
       
     }
   },
   activated() {
   },
  watch: {
  },
  created(){
    console.log('deatail');
    console.log(this.goodsList);
    
  },
  mounted(){
  },
  methods:{
    imgLoad(){
      // console.log('this.$route.path');
      // console.log(this.$route.path.indexOf('home'));
      if(this.$route.path.indexOf('home')){
        console.log('home');
        // this.$bus.$emit('itemImgLoad')
      }else if(this.$route.path.indexOf('deatail')){
        this.$bus.$emit('detailItemImgLoad')
         console.log('detail');
      }
      this.$emit('lastLoad')
    },
    itemClick(iid){
      console.log('跳转到详情页')
      // this.$router.push('/detail/'+iid)
      this.$router.push({
        path:'/detail',
        query:{
          iid:iid,
          random:Math.random()*10
        }
      })
    }
  },
  filters: {
    imageFormat: (item)=> {
        return item.image || item.show.img
    },
    idFromat:(item)=>{
        return item.iid || item.show_id
    }
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
 .goodsImg{
   width: 97%;
   border-radius: 5px;
 }
 .goods-slot{
   width:100%;
   height:100%;
   flex: 1;
   /* text-align: center; */
 }
 .goods-list-item{
   /* width: 50%; */
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
