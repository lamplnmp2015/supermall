export default {
  cartLength(state){
    return state.cartInfo.length
  },
  cartList(state){
    return state.cartInfo.reverse()
  }
}