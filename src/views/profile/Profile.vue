<template>
    <div class="wrapper">
      <nav-bar class="nav_bar">
        <div slot="center">我的</div>
      </nav-bar>
      <scroll-vue class="content">

      </scroll-vue>
    </div>
</template>
<script>
import ScrollVue from '../../components/common/Scroll/Scroll.vue'
import NavBar from 'components/common/NavBar/NavBar';
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   components:{
     ScrollVue,
     NavBar
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
<style scoped>
  .wrapper{
    height: 100vh;
  }
  .content{
   
    overflow: hidden;
  }
  .nav_bar{
    font-weight: 700;
  }
</style>
