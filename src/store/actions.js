import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  addCart (context, payload) {
    // 首先判断添加的商品是否已经再购物车中，如果不在，就添加进去，如果在，就只是数量 + 1
    // 1.查找之前数组中是否有该商品
    const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.判断oldProduct
    if (oldProduct) {
      // 如果有该商品。那么数量 加 1，
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      // 没有该商品，往数组中添加新的商品
      context.commit(ADD_TO_CART, payload)
    }
  }
}
