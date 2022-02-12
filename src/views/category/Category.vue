<template>
    <div class="wrapper" ref="aaa">
      <back-top  v-on:click.native='backTop' v-show='isShowBackTop'/> 
      <nav-bar class="nav_bar">
        <div slot="center">分类</div>
      </nav-bar>
      <div class="scroll">
        <scroll class="categotyLeftTab" ref="scroller">
          <cate-tab-list :leftInfo='leftTab' @liClick='liClick'></cate-tab-list>
        </scroll>
        <tab-control @showChange = 'changeGoodsData' 
      :class="isFixed == true?'home_tab_control2':'home_tab_control3'" v-bind:titles="title"  ref="tabControl"/>
      <scroll class="categotyRightTab" ref="scroller1" @scroll='contentScroll' v-bind:probe-type='3'>
        <cate-goods-list :firstSub='firstSub'  @imgLoad='imgLoad'></cate-goods-list>
        <tab-control @showChange = 'changeGoodsData' 
      class="home_tab_control" v-bind:titles="title"  ref="tabControl1"/>
        <cate-bottom-list :secondSub='secondSub' @imgLoad='imgLoad'></cate-bottom-list>
      </scroll>
      </div>
      
    </div>
     
</template>
<script>
import Scroll from 'components/common/Scroll/Scroll.vue'
import {getCartLeftTabData,getFirstCate,getSecondData } from 'network/home'
import NavBar from 'components/common/NavBar/NavBar';
import CateTabList from './childComps/CateTabList.vue';
import CateGoodsList from './childComps/CateGoodsList.vue';
import CateBottomList from './childComps/CateBottomList.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import BackTop from 'components/content/backTop/BackTop';
export default {
   data() {
      return {
        leftTab:[],
        firstSub:[],
        currentIndex:0,
        secondSub:[],
        title:[
          {name:'流行'},
          {name:'新款'},
          {name:'精选'},
        ],
        isFixed:false,
        isShowBackTop :false,
        tabOffSetTop:0,
        showGoodsIndex:'pop',
      }
      
   },
 watch: {
},
components:{
  NavBar,
  CateTabList,
  Scroll,
  CateGoodsList,
  CateBottomList,
  TabControl,
  BackTop
},
created(){
  this.getLeftTab()
  // this.getFirstSubCate()
  this.$nextTick(function () {
    this.$refs.scroller.refresh() 
    this.$refs.scroller1.refresh() 
    this.initHeight()
   
  });
  
},
mounted(){
  // this.$nextTick(function () {
  //   console.log('height');
  //   console.log(this.$refs.scroller1.$el.style.height);
  // });
},
methods:{
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
    this.$refs.tabControl1.activeIndexs = index
    this.$refs.tabControl.activeIndexs = index
    this.getSubDetail()
    // if(index == 0){
    //   this.showGoodsIndex = 'pop';
    // }else if(index == 1){
    //    this.showGoodsIndex = 'new';
    // }else if(index == 2){
    //    this.showGoodsIndex = 'sell';
    // }
  },
  backTop(){ 
    this.$refs.scroller1.scrollTo(0, 0,900)
  },
  initHeight(){
    let cilentHeight = document.documentElement.clientHeight-93
    this.$refs.scroller1.$el.style.height = cilentHeight+'px'
    this.$refs.scroller.$el.style.height = cilentHeight+'px'
    //  console.log('height');
    // console.log(cilentHeight);
    // console.log(this.$refs.scroller1.$el.style.height);
  },
  imgLoad(){
    this.$refs.scroller1.refresh() 
    this.tabOffSetTop = this.$refs.tabControl1.$el.offsetTop
  },
  liClick(index){
    // console.log(index);
    this.currentIndex = index
    this.getRightData()
    this.getSubDetail()
  },
  getLeftTab(){
    getCartLeftTabData().then((res)=>{ 
      res = JSON.parse(res)
      let arr = []
      let index = 0
      for(let item of res.data.category.list){
        arr[index] = {
          'isChecked':false,
          'title':item.title,
          'maitKey':item.maitKey,
          'miniWallkey':item.miniWallkey
        }
        index++
      }
      arr[0].isChecked = true
      this.leftTab = arr
      // console.log(this.leftTab );
      // this.leftTab[0].isChecked = true
      this.$nextTick(()=> {
        this.$refs.scroller.refresh() 
      });
      this.getRightData()
       this.getSubDetail()
    })
  },
  getRightData(){
    getFirstCate(this.leftTab[this.currentIndex].maitKey).then((ress)=>{
      ress = JSON.parse(ress)
      this.firstSub = ress.data.list
      // console.log('121');
      // console.log(ress.data);
      
      this.$nextTick(()=> {
        this.$refs.scroller1.refresh() 
      });
     
    })
  },
  getSubDetail(){
    getSecondData(this.leftTab[this.currentIndex].miniWallkey,this.showGoodsIndex).then((resss)=>{
      resss = JSON.parse(resss)
      resss.map(function(value){
          value.title = value.title.substring(0,10)+'...';
          return value;
      });
      // console.log('ssssssssssssss');
      // console.log(resss);
      // let arr = [];

      // for(let i=0;i<50;i++){
      //   arr[i] = {
      //     'img':resss[i].img,
      //     'link':resss[i].link,
      //     'sale':resss[i].sale,
      //     'title':resss[i].title
      //   }
      // }
      // for(let item of resss){
      //   arr[index] = {
      //     'img':item.img,
      //     'link':item.link,
      //     'sale':item.sale,
      //     'title':item.title
      //   }
      //   index++
      // }
      console.log('arr');
     
      this.secondSub = resss
      this.$nextTick(()=> {
        this.$refs.scroller1.refresh() 
      });
      // this.secondSub = res.data.list
    })
  },
  contentScroll(params){
    //  
    this.isFixed = -params.y < this.tabOffSetTop?false:true
    if(params.y < -300){
      
      this.isShowBackTop = true
    }else if(params.y > -300){
      this.isShowBackTop = false
     
    }   
  },
  
},
activated() {
  this.$refs.scroller.refresh()
  console.log(this.$refs.scroller);
},


}
</script>
<style scoped>
  .wrapper{
  }
  .nav_bar{
    font-weight: 700;
  }
  .scroll{
    width: 100%;
    height: 100vh;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    
  }
  .categotyLeftTab{
    width: 20%;
    /* height: calc(100% - 93px); */
    height: calc(100vh - 93px);
    overflow: hidden; 
    /* position: absolute;
    top: 44px;
    bottom: 49px; */
    /* right: 0;
    left: 0; */   
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
  width: 80%;
  position: fixed;
  top: 44px;
  right: 0px;
  z-index:9;
  clear: both;
  }
  .home_tab_control3{
    display: none;
  }
  .categotyRightTab{
    width: 80%;
    /* margin-top: 44px; */
    /* height: calc(100vh - 93px); */
    overflow: hidden;
    /* position: absolute;
    top: 44px;
    bottom: 49px;
    left: 70px; */
    /* width: 500px; */
    /* height: calc(100% - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0; */
    /* float: right; */
  }

</style>
