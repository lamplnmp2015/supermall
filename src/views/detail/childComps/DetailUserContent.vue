<template>
<div class="content">
  <div class="top">
    <span>用户评论</span>
    <span>更多></span>
  </div>
    <div class="comment" v-for="(item ,index) in comment" >
    <div class="commentTop">
      <div class="userLogo">
        <img :src="item.user.avatar" alt="">
      </div>
      <div class="userName">{{item.user.uname}}</div>
    </div>
    <div class="commentContent">  
      <div class="commentText">{{item.content}}</div>
      <div class="otherText">
        <span>{{(item.created)|dateFormat}}</span>
        <span>{{item.style}}</span>
      </div>
      <div><span class="otherText" v-for="(item2,index) in item.extraInfo">{{item2}}</span></div>
      <div class="buyersShow" >
        <viewer><img :src="item1" alt="" v-for="(item1,index) in item.images"></viewer>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
data() {
 return{
 
 }
},
components: {
},
//静态
props: {
  comment:{

  }
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
},
//请求数据
created() {
},
mounted() {
}
}
</script>

<style scoped>
  .top{
    width: 95%;
    height: 50px;
    line-height: 50px;
    margin:10px auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
  }
  .comment{
    width: 95%;
    margin: 10px auto;
  }
  .commentTop{
    width: 100%;
    display: flex;
    justify-content: left;
  }
  .commentTop div{
    align-items: center;
  }
  .userLogo{
    width: 30px;
    height:30px;
    border-radius: 50%;
    /* text-align: center; */
    display: table;
    border:2px solid #eee;
  }
  .userLogo img{
    width: 30px;
    height:30px;
    vertical-align: middle;
    border-radius: 50%;
  }
  .userName{
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  .commentContent{
    width: 100%;
    line-height: 25px;
    margin: 10px auto;
    font-size: 14px;
  }
  .otherText{
    width:100%;
    font-size: 12px;
    padding: 10px auto;
    justify-content: left;
    color: rgba(82, 76, 76, 0.657);
  }
  .otherText span{
    padding-right: 10px;
  }
  .buyersShow{
    width: 100%;
    height: 100%;
    margin: 10px auto;
    display: flex;
    justify-content: left;
  }
  .buyersShow img{
    align-items: center;
    width: 79px;
    height: 79px;
    display: inline-block;
    /* height: 22%; */
  }
  .content{
    border-bottom:5px solid #eee
  }
</style>
