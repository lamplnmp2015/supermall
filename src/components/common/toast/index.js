import toast from  './Toast.vue'
const obj = {}
obj.install = (Vue)=>{
  console.log('执行了toast的install函数');
  //toast构造函数
  const ToastComponentConstructor = Vue.extend(toast)
  //创建实例并挂载
  const instance = new ToastComponentConstructor({
      el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
  Vue.prototype.$myToast = instance
}
export default obj

// export default {
//   /*
//   * install function
//   * @param  {Vue} Vue
//   * @param  {object} options  myToast options
//   */
//   install(Vue) {
//       function myToast() {
//         // vue.extend的源码解析 [https://www.jianshu.com/p/c268e16ffbe6](https://www.jianshu.com/p/c268e16ffbe6)

//           const ToastComponentConstructor = Vue.extend(toast)
//           const instance = new ToastComponentConstructor({
//               el: document.createElement('div')
//           })
//           document.body.appendChild(instance.$el)
//           // setTimeout(() => { instance.show = false }, 2)
//       }
//       Vue.prototype.$myToast = myToast

//   }
// }