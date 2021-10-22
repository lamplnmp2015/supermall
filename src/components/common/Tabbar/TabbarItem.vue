<template>
    <div class="tab-bar-item" v-on:click = 'itemClick'>
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else-if="isActive">
        <slot name="item-icon-active"></slot>
      </div>
      
      <div v-bind:style="activeStyle">
        <slot name="item-text"></slot>
      </div>
      <!-- <img src="../../assets/img/tabbar/home.png" alt="">
      <div>首页</div> -->
    </div>
</template>
<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
   data() {
      return {
        // isActive:true
      }
   },
   activated() {
   },
 watch: {
},
created(){
},
mounted(){
},
methods:{
  itemClick(){
    console.log('itemClick');
    console.log(this.path);
    this.$router.replace(this.path)
  }
},
computed:{
  isActive(){
    return this.$route.path.indexOf(this.path) !== -1
  },
  activeStyle(){
    return this.isActive?{color:this.activeColor}:{}
  }
}


}
</script>``
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
