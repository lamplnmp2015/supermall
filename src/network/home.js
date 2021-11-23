import {request} from './request';
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  }); 
}
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type:String(type),
      page:Number(page)
    }
  }); 
}
export function getDetailData(id){
  return request({
    url:'/detail',
    params:{
      id:String(id)
    }
  })
}
export function getRecommendData(){
  return request({
    url:'/recommend',
  })
}
export function getCartLeftTabData(){
  return request({
    url:'/category',
  })
}
export function getFirstCate(id){
  return request({
    url:'/subcategory',
    params:{
      maitKey:id
    }
  })
}
getSecondData
export function getSecondData(id,type){
  return request({
    url:'/subcategorydetail',
    params:{
      miniWallkey:id,
      type:type
    }
  })
}