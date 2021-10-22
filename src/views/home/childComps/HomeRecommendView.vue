<template>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
</template>
<script>

export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default:[]
    }
  },
   data() {
      return {
      }
   },
   components: {
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
  .recommend{
    display: flex;
    width: 100%;
    font-size: 12px;
    padding:15px 0 30px;
    text-align: center;
    border-bottom: .5rem solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
   .recommend-item img{
     width :3.5rem;
     height: 3.5rem ;
   }
</style>
