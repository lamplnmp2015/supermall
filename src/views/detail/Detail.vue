<template>
  <div id ='detail'>
    
    <div class="detail-nav-bar">
      <nav-bar class="nav_bar">
          <div class="nav_left" slot="left" @click="backBefore">
            <img src="~assets/img/detail/back.svg" @load="swiperImageLoad">
          </div>
          <tab-control slot="center"
            ref="tabControl"
            class="home_tab_control" v-bind:titles="title" @showChange ='detailChange'>
            </tab-control> 
      </nav-bar>
    </div>
    
    <!-- <div class="home-nav-bar">
      <nav-bar class="nav_bar">
        <div slot="center">购物街</div>
      </nav-bar>
      </div> -->
    <scroll class="home-scroller" ref='scroller' v-bind:probe-type='3' @pullingUp = 'loadMore'>
      <detail-swiper :swiperdata='swiperData' @swiperImageLoad ='swiperImageLoad' ></detail-swiper>
      <detail-item-info :itemInfo = 'itemInfo' :columns='columns' :service='service'></detail-item-info>
      <detail-shop-info :shopInfo='shopInfo' @swiperImageLoad2 ='swiperImageLoad2'></detail-shop-info>
      <detail-more :detailInfo='detailInfo'></detail-more>
    </scroll>
  </div>
</template>

<script>
import {getDetailData} from 'network/home'
import NavBar  from 'components/common/NavBar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import Scroll from 'components/common/Scroll/Scroll'
import DetailSwiper from './DetailSwiper'
import DetailItemInfo from 'views/detail/childComps/DetailItemInfo'
import DetailShopInfo from 'views/detail/childComps/DetailShopInfo'
import DetailMore from 'views/detail/childComps/DetailMore'
import {debounce}  from 'common/utils';
export default {
data() {
 return{
   title:[
     {name:'商品'},
     {name:'参考'},
     {name:'评论'},
     {name:'推荐'},
   ],
   swiperData:[

   ],
   itemInfo:{

   },
   shopInfo:{

   },
   columns:{

   },
   service:{

   },
   detailInfo:{

   },
   
 }
},
props:{
  
},
components: {
  NavBar,
  TabControl,
  Scroll,
  DetailSwiper,
  DetailItemInfo,
  DetailShopInfo,
  DetailMore
  
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
  getDetailData(id){
    getDetailData(id).then(res=>{
      this.swiperData = res.result.itemInfo.topImages
      this.itemInfo = res.result.itemInfo
      this.shopInfo = res.result.shopInfo
      this.columns = res.result.columns
      this.detailInfo = res.result.detailInfo.detailImage[0]
      this.$refs.scroller.refresh
      // console.log(res.result);
      console.log(res.result.detailInfo.detailImage[0]);
    })
  },
  swiperImageLoad(){
    console.log('1111');
    
    this.$refs.scroller.refresh()
    // const refresh = debounce(this.$refs.scroller.refresh,300)
    // refresh()
  },
  swiperImageLoad2(){
    console.log('2222');
    
    this.$refs.scroller.refresh()
    console.log(this.$refs.scroller.scroll);
    // const refresh = debounce(this.$refs.scroller.refresh,300)
    // refresh()
  },
  detailChange(index){
    switch(index){
      case 0 :
        console.log('商品');
        break;
      case 1 :
        console.log('参考');
        break;
      case 2 :
        console.log('评价');
        break;
      case 0 :
        console.log('推荐');
        break;
    }
  },
  backBefore(){
    this.$router.go(-1);
  },
  loadMore(){
    console.log('上拉加载');
    this.$refs.scroller.finishPullUp()
  }
},
//请求数据
created() {
  
  this.getDetailData(this.$route.params.iid);
},
mounted() { 
},
beforeRouteLeave(to, from, next) {
 from.meta.keepAlive = false;
 next();
}


}
</script>

<style scoped>
  .detail-nav-bar {
    width: 100%;
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }
  /* .home-nav-bar {
    width: 100%;
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  } */
  .nav_bar{
    width: 100%;
    display: flex;
    background-color: #fff;
  }
  .home-scroller{
    /*height:300px;*/
    /* overflow: scroll-y; */
    height: calc(100% - 43px);
    position: absolute;
    top: 43px;
    bottom: 0px;
    right: 0;
    left: 0;
   
    /* border: 2px solid red; */
    /* height: calc(100% + 45px); */
    /* overflow: hidden; */
    /* margin-top:44px; */
  }
  .ul{
    height: 100%;
  }
  .nav_left{
    width: 100%;
    height: 44px;
    text-align:center;
    line-height: 44px;
    color: red;
    font-size: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .nav_left img{
    width: 44px;
    height: 20px;
    
    /* vertical-align:middle; */
  }
  .detailNav{
    width: 100%;
    flex: 1;
    font-size: 18px;
    display: inline-block;
  }
  .detailNav span {
    padding: 5px;
    
  }
  .home_tab_control{
    /*两个要混合使用*/
    width: 100%;
    color: black;
    font-size: 16px;
    background-color: #fff;
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }

</style>
