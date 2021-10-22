<template>
    <div id = 'home'>
      <div class="home-nav">
        <nav-bar class="nav_bar">
          <div slot="left"></div>
          <div slot="center">购物街</div>
          <div slot="right"></div>
        </nav-bar>
      </div>
      <!-- <div class="home-swiper"> -->
        <home-swiper v-bind:banners='banner'></home-swiper> 
      <!-- </div> -->
      <home-recommend v-bind:recommends='recommend'></home-recommend>
      <featrue-view></featrue-view>                                     
    </div>
</template>
<script>
import {getHomeMultidata} from 'network/home'
import NavBar from 'components/common/NavBar/NavBar';
import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatrueView from './childComps/FeatrueView'

export default {
  name:'Home',
  components:{
    'home-swiper':HomeSwiper,
    'home-recommend':HomeRecommendView,
    'nav-bar':NavBar,
    'featrue-view':FeatrueView,
   },
  
    
  data() {
      return {
        result:null,
        banner:[],
        recommend:[],
      }
   },
   activated() {
   },
   
created(){
  getHomeMultidata().then(res=>{
    console.log(res.data.banner.list);
    //res变量名会被回收，回收机制发现res的值没有指向了也会回收
    // 所以先赋值给另一个变量
    // this.result = res;
    this.banner = res.data.banner.list
    this.recommend = res.data.recommend.list
  })
},
mounted(){
},
methods:{
}


}
</script>
<style scoped>
  .nav_bar{
    background-color: #d81e06;
    color: #fff;
    
  }  
  .home-nav{
    position: flex;
    top: 0;
  }
  .home-swiper{
   margin-top: 2.4rem;
  }
</style>
