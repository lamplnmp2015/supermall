<template>
<div class="home-swiper">
  <swiper>
      <swiper-item  v-for="(item,index) in banners" >
        <a :href="item.link">
          <img :src="item.image"/>
        </a> 
      </swiper-item>  
    </swiper>
</div>
    
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name:'HomeSwiper',                      
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
     'swiper':Swiper,
     'swiper-item':SwiperItem,
   },    
   data() {
      return {

      }
   },
   
   computed: {
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
  }


}
</script>
<style scoped>
  
</style>
