<template>
    <div class="tab-control"  >
      <div class="tab-control-item" v-for="(item,index) in titles" >
          <span v-bind:class='{span_active:index===activeIndexs}'   v-on:click="spanClick(index)">
            {{item.name}}
          </span>
      </div>
      
    </div>
</template>
<script>
export default {
   data() {
      return {
        activeIndexs:0
      }
   },
   props:{
     titles:{
       type:Array,
       default(){
         return []
       }
     }
   },
   components: {
   },
   computed: {
  
  
   },
   activated() {
   },

  created(){
  },
  mounted(){
  },

  methods:{
    spanClick(index){
      this.activeIndexs = index
      console.log(index);
      console.log(this.activeIndex);
      this.$emit('showChange', this.activeIndexs);
    }
  }


}
</script>
<style scoped>
  /* .tab-control{
    display: flex;
    font-size:15px;
  }
  .tab-control-item{
    height: 40px;
    line-height: 40px;
    flex: 1;
    text-align: center;
  }

  
  .span_active{
    border-bottom: 2px solid red;
  } */
    .tab-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 40px;
    background: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .span_active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);
  }
</style>
