import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Viewer from 'v-viewer'
import store from './store'
import 'viewerjs/dist/viewer.css'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import waterfall from 'vue-waterfall2'
// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://81.68.162.14:3000',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     options: { path: "/my-app/" } //Optional options
// }))
Vue.use(waterfall)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.use(VueLazyLoad,{
  preload:1.3, 
  error:'dist/error.png',
  loading:'dist/loading.gif',
  attempt:1,
  filter:{
    imageFormat: (listener, options)=> {
      console.log('filter');
      console.log(listener);
      console.log(options);
        // return item.image || item.show.img
    },
  }
})
Vue.use(Toast);
Vue.use(Viewer);
// Viewer.setDefaults({
//   Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
// });
FastClick.attach(document.body)
Viewer.setDefaults({
  'inline': false, //启用inline模式
  'button': true, //显示右上角关闭按钮
  'navbar': true, //显示缩略图导航
  'title': false, //显示当前图片的标题
  'toolbar': false, //显示工具栏
  'tooltip': true, //显示缩略百分比
  'movable': true, //图片是否可移动
  'zoomable': true, //图片是否可缩放
  'rotatable': true, //图片是否可旋转
  'scalable': true, //图片是否可反转
  'transition': true, //使用css3过度
  'fullscreen': false, //播放时是否全屏
  'keyboard': true, //
})
 
Vue.filter('dateFormat', function(originVal) {
  // var originVal = originVal;
  // return (originVal,type)=>{
    if(originVal.toString().length <= 10){
      originVal =  originVal*1000;
    }
    // const dt = new Date(originVal*1000) 毫秒时间戳 可自行判断
    const dt = new Date(originVal)
     const y = dt.getFullYear()
     const m = (dt.getMonth() + 1 + '').padStart(2, '0')
     const d = (dt.getDate() + '').padStart(2, '0')
    
     
    // if(type = 1){
      const hh = (dt.getHours() + '').padStart(2, '0')
     const mm = (dt.getMinutes() + '').padStart(2, '0')
     const ss = (dt.getSeconds() + '').padStart(2, '0')
    //  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    // }else{
      return `${y}-${m}-${d}`
    // }
  // }  
 })
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
