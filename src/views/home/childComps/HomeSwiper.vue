<template>
<!-- <div class="home-swiper"> -->
  <swiper>
      <swiper-item  v-for="(item,index) in banners" >
        <a :href="item.link">
          <img @load='imageLoad' :src="item.image" />
        </a> 
      </swiper-item>  
    </swiper>
<!-- </div> -->
    
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
  data(){
    return {
      isLoad:false
    }
  },
  components:{
     'swiper':Swiper,
     'swiper-item':SwiperItem,
     
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
    imageLoad(){   
      // if(!this.isLoad){
        console.log('---');
        this.$emit('swiperImageLoad')
        // this.isLoad = true;
      // }   
      
    }
  }


}
</script>
<style scoped>
  
</style>
