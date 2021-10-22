<template>
<!-- 用class避免id重复 -->
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
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
  .nav-bar{
    display: flex;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
    z-index:999;
  }
  .left ,.right{
     width: 60px;

  }
  .center{
    flex: 1;
    text-align: center;
   
  }
</style>
