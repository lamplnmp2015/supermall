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