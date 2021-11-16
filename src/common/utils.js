
/**
  * 事件监听相关的方法
  */
 export function debounce(func,delay=300){
  let timer = null;
  return (...args)=>{
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      console.log('debounce');
      func.apply(this,args)
    },delay)
  }
 }