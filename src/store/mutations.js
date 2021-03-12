import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  // 购物车中有该商品。执行该数量增加函数
  [ADD_COUNTER] (state, payload) {
    payload.count++
  },
  // 购物车中没有该商品。执行该添加新商品函数
  [ADD_TO_CART] (state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}
