// 将app.vue中冗余的代码抽离出来
<template>
  <tab-bar>
      <!-- 将父组件中的数据绑定到子组件中，:path='home'activeColor是死数据这里不需要
      :绑定 -->
      <tab-bar-item :path='homePath' activeColor = '#d81e06'>
        <img src="~assets/img/tabbar/home.svg" slot = 'item-icon'>
        <img src="~assets/img/tabbar/home_active.svg" slot = 'item-icon-active'>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item :path='categoryPath' activeColor = '#d81e06'>
        <img src="~assets/img/tabbar/category.svg" slot = 'item-icon'>
        <img src="~assets/img/tabbar/category_active.svg" slot = 'item-icon-active'>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item :path='cartPath' activeColor = '#d81e06'>
        <img src="~assets/img/tabbar/shopcart.svg" slot = 'item-icon'>
        <img src="~assets/img/tabbar/shopcart_active.svg" slot = 'item-icon-active'>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item :path='profilePath' activeColor = '#d81e06'>
        <img src="~assets/img/tabbar/profile.svg" slot = 'item-icon'>
        <img src="~assets/img/tabbar/profile_active.svg" slot = 'item-icon-active'>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> 

    
</template>
<script>
import Tabbar from 'components/common/Tabbar/Tabbar'
import TabbarItem from 'components/common/Tabbar/TabbarItem'
export default {
   data(){
    return{
      homePath:'/home',
      categoryPath:'/category',
      cartPath:'/cart',
      profilePath:'/profile'
    }
    
  },
   activated() {
   },
  components:{
    'tab-bar':Tabbar,
    'tab-bar-item':TabbarItem
  },
  watch: {
  },
  created(){
  },
  mounted(){
  },
  methods:{
  }


}
</script>
<style>
@import "~assets/css/base.css";
  #tab-bar{
  font-size:14px;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
   z-index:999;
  /* x、y、颜色深度、颜色 */
  box-shadow: 0px -3px 1px rgba(100, 100, 100, .08);
  /* vertical-align: middle; */
}
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  width: 0;
  /* line-height: 24px; */
  
}
.tab-bar-item img{
  margin-top: 3px;
  height: 24px;
  width: 24px; 
  vertical-align: middle;
}

</style>
