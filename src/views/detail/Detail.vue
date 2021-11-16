<template>

  <div id ='detail'>
    <div class="hover"  v-if="isLoadShow"></div>
    <div class='loader' v-if="isLoadShow"></div>
    <div class="joinSuccess" v-if="isJoinSuccess">加入购物车成功</div>
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
    <scroll class="detail-scroller" ref='scroller' v-bind:probe-type='3' @pullingUp = 'loadMore' @scroll='contentDeatilScroll'>
      
      <detail-swiper :swiperdata='swiperData' @swiperImageLoad ='swiperImageLoad' ></detail-swiper>
      <detail-item-info ref= 'itemInfo':itemInfo = 'itemInfo' :columns='columns' :service='service'></detail-item-info>
      <detail-shop-info ref='shopInfo' :shopInfo='shopInfo' @swiperImageLoad2 ='swiperImageLoad'></detail-shop-info>
      <detail-more ref = 'detailMore' :detailInfo='detailInfo' @swiperImageLoad2 ='swiperImageLoad'></detail-more>
      <detail-param :tables='tables' ref = 'detailParams':itemParams='infoSet'></detail-param>
      <detail-user-content :comment='comment' ref="comment"></detail-user-content>
      <div class="goodsListTop">推荐</div>
      <goods-list v-bind:goodsList='recommend' ref = 'goodsList'></goods-list>
      <div class="bottom">暂时没有啦~~</div>
    </scroll>
    <detail-bottom-nav @joinCart = 'joinCart'></detail-bottom-nav>
    <back-top  v-on:click.native='backTop' v-show='isShowBackTop'/>
  </div>
</template>

<script>
import {getDetailData,getRecommendData} from 'network/home'
import NavBar  from 'components/common/NavBar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import Scroll from 'components/common/Scroll/Scroll'
import DetailSwiper from './DetailSwiper'
import DetailItemInfo from 'views/detail/childComps/DetailItemInfo'
import DetailShopInfo from 'views/detail/childComps/DetailShopInfo'
import DetailMore from 'views/detail/childComps/DetailMore'
import DetailUserContent from 'views/detail/childComps/DetailUserContent'
import DetailParam from 'views/detail/childComps/DetailParam'
import DetailBottomNav from 'views/detail/childComps/DetailBottomNav'
import {debounce}  from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'
import GoodsList from 'components/content/goods/GoodsList.vue'; 
export default {
data() {
 return{
   title:[
     {name:'商品'},
     {name:'参数'},
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
   infoSet:{

   },
   tables:[],
   isShowBackTop :false,
   comment:{

   },
   skuInfo:null,
   recommend:null,
   fromPath:'',
   themeTopYs:[],
   getThemeTopYs:'',
   imgLoad:'',
   isLoadShow:true,
   isJoinSuccess:false,
   timer:null
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
  DetailMore,
  BackTop,
  DetailParam,
  DetailUserContent,
  GoodsList,
  DetailBottomNav
},
//静态
props: {
},
//对象内部的属性监听，也叫深度监听
watch: {
  '$route'(to, from) {
    console.log(from);
      // this.getRecommendData();
      // this.getDetailData(this.$route.query.iid);
    },
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  getDetailData(id){
    getDetailData(id).then(res=>{
      if(res.result == null){
        this.$router.go(-1);
        return false;
      }
      this.swiperData = res.result.itemInfo.topImages
      this.itemInfo = res.result.itemInfo
      this.shopInfo = res.result.shopInfo
      this.columns = res.result.columns
      this.infoSet = res.result.itemParams.info.set
      this.tables = res.result.itemParams.rule.tables
      this.comment = res.result.rate.list
      this.skuInfo = res.result.skuInfo.skus
      this.detailInfo = res.result.detailInfo.detailImage[0] 
      this.$refs.scroller.refresh()
      this.$refs.scroller.scrollTo(0,0,0)
    
    })
  },
  getRecommendData(){
    this.isLoadShow = true;
    getRecommendData().then(res=>{
      this.recommend = JSON.parse(res).data.list;
      this.isLoadShow = false;
      this.$refs.scroller.refresh()
    })
  },
  swiperImageLoad(){
    // this.imgLoad();
    this.$refs.scroller.refresh()
    this.getThemeTopYs()
  },
  // swiperImageLoad2(){
  //   console.log('2222');
  //   this.$refs.scroller.refresh()
  //   console.log(this.$refs.scroller.scroll);
  //   this.getThemeTopYs()
  //   // const refresh = debounce(this.$refs.scroller.refresh,300)
  //   // refresh()
  // },
  detailChange(index){
    switch(index){
      case 0 :
        break;
      case 1 :
        break;
      case 2 :
        break;
      case 0 :
        break;
    }
    this.$refs.scroller.scrollTo(0,-this.themeTopYs[index],100)
  },
  backBefore(){
    console.log('2344');
    console.log(this.$router);
   this.$router.push(this.fromPath);
  //  this.$router.go(-1);
  },
  loadMore(){
    this.$refs.scroller.finishPullUp()
  },
  tabChange(params){
    params.y = Math.abs(params.y)
    var index = 0;
    for(let i = 0;i< this.themeTopYs.length;i++){
      if((i< this.themeTopYs.length-1 && params.y >= this.themeTopYs[i] && params.y < this.themeTopYs[i+1]) || (i>=this.themeTopYs.length-1 && params.y >= this.themeTopYs[i])){
        index = i;
      }
    }
    console.log('index');
    console.log(index);
    console.log(this.themeTopYs);
    // if(params.y >= this.themeTopYs[1] && params.y < this.themeTopYs[2]){
    //   index = 1
    // }else if(params.y >= this.themeTopYs[2] && params.y < this.themeTopYs[3]){
    //   index = 2
    // }else if( params.y >= this.themeTopYs[3]){
    //   index = 3
    // }
    if(this.$refs.tabControl.activeIndex != index) this.$refs.tabControl.activeIndex =  index;
  },
  contentDeatilScroll(params){
    // console.log(params.y);
    if(params.y < -300){
      this.isShowBackTop = true
    }else if(params.y > -300){
      this.isShowBackTop = false
    }
    this.tabChange(params);
  },
  backTop(){ 
    this.$refs.scroller.scrollTo(0, 0,900)
  },
  joinCart(){
    // this.isJoinSuccess = true;
    console.log('2222');
    let product = {}
    product.image = this.swiperData[0];
    product.title = this.itemInfo.title;
    product.desc = this.itemInfo.desc;
    product.price = this.itemInfo.price;
    product.iid = this.$route.query.iid;
    product.isChecked = true;
    // product.count = 1;
    this.$store.dispatch('addCart', product).then((res)=>{
      // this.isJoinSuccess = true
      // if(this.timer) clearTimeout(this.timer)
      // this.timer = setTimeout(()=>{
      //   this.isJoinSuccess = false;
      // },700)
      // console.log('3333');
      console.log(this.$myToast);
     this.$myToast.show('加入购物车成功',500)
    })
    console.log(this.$store.state.cartInfo);
    
  }
 
},
//请求数据
created() {
  this.iid = this.$route.query.iid;
  this.getRecommendData();
  this.getDetailData(this.iid); 
                                     
},
mounted() { 
  const refresh = debounce(this.$refs.scroller.refresh,300)
  this.$bus.$on('deatilItemImgLoad',()=>{
    refresh()
  })
  this.getThemeTopYs = debounce(()=>{
      //每次调用都将themeTopYs重置为空数组，解决二次进入当前页面数据不准确
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.detailParams.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.goodsList.$el.offsetTop - 40);
  },500)
  this.imgLoad = debounce(()=>{
    this.$refs.scroller.refresh()
  },500)
  
},

beforeRouteUpdate (to, from, next) {
  next(vm => {
    vm.fromPath = from.path;
    console.log('fromPath');``
    console.log(from.path);
    if(from.path.indexOf('detail') != -1){
      vm.fromPath = from.path+'?iid='+vm.$route.query.iid; 
    }
  })
    next()
    this.getRecommendData();
    this.getDetailData(this.$route.query.iid);  
    
},
beforeRouteLeave(to, from, next) {
 from.meta.keepAlive = false;
 next();
},
beforeRouteEnter (to, from, next) {
  next(vm => {
    vm.fromPath = from.path;
    console.log('fromPath');``
    console.log(from.path);
    if(from.path.indexOf('detail') != -1){
      vm.fromPath = from.path+'?iid='+vm.$route.query.iid; 
    }
  })
  
},
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
  .detail-scroller{
    /*height:300px;*/
    /* overflow: scroll-y; */
    height: calc(100% - 91px);
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
  .goodsListTop{
    width: 95%;
    margin:10px auto;
  }
  .bottom{
    width: 95%;
    margin-top: 10px auto;
    text-align: center;
    color: rgb(150, 146, 146);
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
  .hover{
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,0.4);
    position: fixed;
    z-index: 999;
  }
  .joinSuccess{
    width: 150px;
    height: 30px;
    background-color: rgba(73, 68, 68, 0.6);
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    position: fixed;
    z-index: 998;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
</style>
