import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
// Viewer.setDefaults({
//   Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
// });
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
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
