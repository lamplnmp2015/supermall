<template>
    
    <div class="wrapper" ref="aaa">
      <nav-bar class="nav_bar">
        <div slot="center">分类</div>
      </nav-bar>
      
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import NavBar from 'components/common/NavBar/NavBar';
export default {
   data() {
      return {
        scroll:null
      }
   },
   activated() {
   },
 watch: {
},
components:{
  NavBar
},
created(){
},
mounted(){
  this.scroll = new BScroll(this.$refs.aaa,{

  })
},
methods:{
}


}
</script>
<style scoped>
  .wrapper{
  
    
  }
  .nav_bar{
    font-weight: 700;
  }
</style>
