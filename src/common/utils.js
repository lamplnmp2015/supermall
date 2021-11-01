
/**
  * 事件监听相关的方法
  */
 export function debounce(func,delay){
  let timer = null;
  return (...args)=>{
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}