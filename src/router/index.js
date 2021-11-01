import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Cart from 'views/cart/Cart'
import Category from 'views/category/Category'
import Profile from 'views/profile/Profile'
import Detail from 'views/detail/Detail'
Vue.use(VueRouter)
const routes = 
[
  {
    path:'/',
    meta:{
      title:'首页'
    },
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页',
      keepAlive: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title:'分类',
      keepAlive: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title:'购物车',
      keepAlive: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'我的',
      keepAlive: true
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta:{
      title:'商品详情',
      keepAlive: false
    },
    props:true
  }
]
const router = new VueRouter({
  mode:'history',
  routes
})
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()    
  
})

export default router