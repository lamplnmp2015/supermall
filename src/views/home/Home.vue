<template>
    <div id='home' >
      <div class='loader' v-if="isLoadShow"></div>
      <div class="home-nav-bar">
      <nav-bar class="nav_bar">
        <div slot="center">购物街</div>
      </nav-bar>
      </div>
      <tab-control @showChange = 'changeGoodsData' 
      :class="{home_tab_control2:isFixed}" v-bind:titles="title"  ref="tabControl1"/>
      <scroll class="home-scroller" ref='scroller' 
      v-bind:pull-up-load = "true" @pullingUp = 'loadMore'     v-bind:probe-type='3' @scroll='contentScroll'>
          <home-swiper v-bind:banners='banner' @swiperImageLoad='imageLoad' ref='home_swiper'></home-swiper> 
          <home-recommend v-bind:recommends='recommend'></home-recommend>
          <featrue-view></featrue-view>  
          <tab-control @showChange = 'changeGoodsData' 
          ref="tabControl"
          class="home_tab_control" v-bind:titles="title"></tab-control> 
          <goods-list v-bind:goodsList='goods[showGoodsIndex].list'></goods-list>
      </scroll> 
      <back-top  v-on:click.native='backTop' v-show='isShowBackTop'/>                     
    </div>
   
</template>   

<script>
import {getHomeMultidata, getHomeGoods} from 'network/home'
import NavBar from 'components/common/NavBar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatrueView from './childComps/FeatrueView'
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import ScrollVue from 'components/common/Scroll/Scroll';
import BackTopVue from 'components/content/backTop/BackTop';
import {debounce}  from 'common/utils';
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
        showGoodsIndex:'pop',
        tabOffSetTop:0,
        isFixed:false,
        isLoadShow:false,
        saveY:0,
        // top:0
      }
   },
   
   
   
created(){
  this.getHomeMultidata()
  this.getHomeGoods('pop')
  this.getHomeGoods('sell')
  this.getHomeGoods('new')
  
},
methods:{
  imageLoad(){
    this.tabOffSetTop = this.$refs.tabControl.$el.offsetTop
  },
  handleScroll() {
    // this.top = this.$refs.scroll_top.getBoundingClientRect().top;
    
    //滚动条在y轴上的滚动距离
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //文档的总高度
    var documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //浏览器窗口的高度
    var getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;

    
     
    if (scrollTop + getWindowHeight >= documentScrollHeight-500) {
     this.getHomeGoods(this.showGoodsIndex)
    }
   
  },
  getHomeMultidata(){
    getHomeMultidata().then(res=>{
      //res变量名会被回收，回收机制发现res的值没有指向了也会回收
      // 所以先赋值给另一个变量
      this.result = res;
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      
    })
  },
  getHomeGoods(type){
    let page = this.goods[type].page+1;
    this.isLoadShow = true;
    getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page = res.data.page;
      this.isLoadShow = false;
       this.$nextTick(() => {
        this.$refs.scroller.refresh()
      })
      this.$refs.scroller.finishPullUp()
    }).catch(err=>{
      getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page = res.data.page;
      this.$nextTick(() => {
        this.$refs.scroller.refresh()
      })
      
      this.$refs.scroller.finishPullUp()
    })
    })
  },
  changeGoodsData(index){
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
    this.$refs.tabControl1.activeIndex = index
    this.$refs.tabControl.activeIndex = index
    // if(index == 0){
    //   this.showGoodsIndex = 'pop';
    // }else if(index == 1){
    //    this.showGoodsIndex = 'new';
    // }else if(index == 2){
    //    this.showGoodsIndex = 'sell';
    // }
  },
 
  backTop(){ 
    this.$refs.scroller.scrollTo(0, 0,900)
  },
  contentScroll(params){
    // console.log(params.y);
    this.isFixed = -params.y < this.tabOffSetTop?false:true
    if(params.y < -300){
      
      this.isShowBackTop = true
    }else if(params.y > -300){
      this.isShowBackTop = false
     
    }   
  },
  
  loadMore(){
    // this.getHomeGoods(this.showGoodsIndex)
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
  },
  
 
},
mounted(){
  
  /**
   * 监听图片加载完成后refresh
   */
  const refresh = debounce(this.$refs.scroller.refresh,300)
  this.$bus.$on('itemImgLoad',()=>{
    refresh()
  })
},
updated() {
  
},
activated() {
  this.$refs.scroller.scrollTo(this.saveY)  
  },
deactivated() {
  this.saveY = this.$refs.scroller.getCurrentY()   
},

}
</script>
<style scoped>
    #home {
    /* padding-top: 44px; */
    height: 100vh;
    display: flex;
  }

  .home-nav-bar {
    width: 100%;
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }
  .fixed{
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .home_tab_control{
    /*两个要混合使用*/
    width: 100%;
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }
  .home_tab_control2{
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 43px;
    z-index:9;
    clear: both;
  }

  .home-scroller{
    /*height:300px;*/
    /* overflow: scroll-y; */
    height: calc(100%-89px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    /* height: calc(100% - 45px);
    overflow: hidden;
    margin-top:44px; */
  }
  .nav_bar{
    position: fixed;
    top: 0;
    overflow: hidden;
    
  }
    .loader{
      border:6px solid #f3f3f3;
      border-radius:50%;
      border-top:6px solid #A2A2A2;
      width:50px;
      height:50px;
      /* animation-name:load; */
      animation:load 2s linear infinite;
      z-index: 999;
      position: fixed;
      top: 50%;
      right: 40%;
  }
  @keyframes load{
      0%{
          transform: rotate(0deg);
      }
      100%{
          transform:rotate(360deg);
      }
  }
  

</style>
