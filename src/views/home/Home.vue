<template>
    <div id='home' >
      <!-- <div class="home-nav-bar"> -->
      <nav-bar class="nav_bar">
        <div slot="center">购物街</div>
      </nav-bar>
      <!-- </div> -->
      <scroll class="home-scroller" ref='scroller' v-bind:probe-type='3' @scroll='contentScroll'>
          <home-swiper v-bind:banners='banner'></home-swiper> 
          <home-recommend v-bind:recommends='recommend'></home-recommend>
          <featrue-view></featrue-view>  
          <tab-control @showChange = 'changeGoodsData' class="home-tab-control" v-bind:titles="title"></tab-control> 
          <goods-list v-bind:goodsList='goods[showGoodsIndex].list'></goods-list>
    
      </scroll> 
      <back-top  v-on:click.native='backTop' v-show='isShowBackTop'/>                     
    </div>
   
</template>   

<script>
import {getHomeMultidata, getHomeGoods} from 'network/home'
import NavBar from 'components/common/NavBar/NavBar';
import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatrueView from './childComps/FeatrueView'
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import ScrollVue from 'components/common/Scroll/Scroll';
import BackTopVue from 'components/content/backTop/BackTop';


export default {
  name:'Home',
  components:{
    'home-swiper':HomeSwiper,
    'home-recommend':HomeRecommendView,
    'nav-bar':NavBar,
    'featrue-view':FeatrueView,
    'tab-control':TabControl,
    'goods-list':GoodsList,
    'scroll':ScrollVue,
    'back-top':BackTopVue,
   },
  
    
  data() {
      return {
        result:null,
        isShowBackTop :false,
        banner:[],
        recommend:[],
        scroll:'',
        title:[
          {name:'流行'},
          {name:'新款'},
          {name:'精选'},
        ],
        goods:{
          'pop':{
            page:0,
            list:[

            ]
          },
          'new':{
            page:0,
            list:[
              
            ]
          },
          'sell':{
            page:0,
            list:[
              
            ]
          }
        },
        showGoodsIndex:'pop'

        
        // top:0
      }
   },
   activated() {
     console.log('top='+this.$top);
    
     window.scrollTo(0, this.$top);
   },
   
   
created(){
  this.getHomeMultidata()
  this.getHomeGoods('pop')
  this.getHomeGoods('sell')
  this.getHomeGoods('new')
},
methods:{
  handleScroll() {
    // this.top = this.$refs.scroll_top.getBoundingClientRect().top;
    
    //滚动条在y轴上的滚动距离
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //文档的总高度
    var documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //浏览器窗口的高度
    var getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(scrollTop);
    // console.log(getWindowHeight);
    console.log('浏览器窗口高度='+getWindowHeight);
    console.log('滚动的距离='+scrollTop);
    console.log('文档高度='+documentScrollHeight);
     
    if (scrollTop + getWindowHeight >= documentScrollHeight-200) {
      console.log(11111111111111)
     this.getHomeGoods(this.showGoodsIndex)
    }
   
  },
  getHomeMultidata(){
    getHomeMultidata().then(res=>{
      // console.log(JSON.parse(res.data));
      console.log(res.data);
      //res变量名会被回收，回收机制发现res的值没有指向了也会回收
      // 所以先赋值给另一个变量
      this.result = res;
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },
  getHomeGoods(type){
    let page = this.goods[type].page+1;
    getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page = res.data.page;
    console.log(this.goods[type]);
    console.log(this.goods[type].page);
  })
  },
  changeGoodsData(index){
    console.log('index='+index);
    switch(index){
      case 0:
      this.showGoodsIndex = 'pop';
      break;
      case 1:
      this.showGoodsIndex = 'new';
      break;
      case 2:
      this.showGoodsIndex = 'sell';
      break;
    }
    // if(index == 0){
    //   this.showGoodsIndex = 'pop';
    // }else if(index == 1){
    //    this.showGoodsIndex = 'new';
    // }else if(index == 2){
    //    this.showGoodsIndex = 'sell';
    // }
  },
 
  backTop(){ 
    console.log(this.$refs.scroller.scroll);
    this.$refs.scroller.scroll.scrollTo(0, 0,900)
  },
  contentScroll(params){
    if(params.y < -300){
      this.isShowBackTop = true
    }else if(params.y > -300){
      this.isShowBackTop = false
    }
    
    console.log(params);
  }
},
mounted(){
  window.addEventListener("scroll", this.handleScroll, true);
  
},
updated() {
  
},
beforeDestroy: function () {
  window.removeEventListener("scroll", this.handleScroll,true);
},

  beforeRouteLeave (to, from, next) {
    // ...
    this.$top = document.documentElement.scrollTop || document.body.scrollTop;
    next();
  }

}
</script>
<style scoped>
    #home {
    /* padding-top: 44px; */
    height: 100vh;
    display: flex;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }

  .home-tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }

  .home-scroller{
    /*height:300px;*/
    /* overflow: scroll-y; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    /* height: calc(100% - 45px);
    overflow: hidden;
    margin-top:44px; */
  }
  
</style>
