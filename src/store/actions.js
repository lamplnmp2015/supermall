export default{
  addCart(context,payload){
    return new Promise((resolve, reject)=>{
      let oldInfo = null
      for(let item of context.state.cartInfo){
        if(item.iid == payload.iid){
          oldInfo = item;
        }
      }
      if(oldInfo){
        context.commit('addCounter',oldInfo)
        resolve()
      }else{
        context.commit('addToCart',payload)
        resolve()
      }
    })
    
    
  }
}