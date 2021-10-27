<template>
    <div class="wrapper" ref="aaa">
      <ul class="content">
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
        <li>測試</li>
      </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
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
    height: 150px;
    background-color: brown;
    overflow: scroll;
    
  }
</style>
