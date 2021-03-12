<template>
  <div class="cart-list-item">
    <div>
      <h3 class="shop-head">
        <div class="shop-head-item">
          <div type="checkbox" class="shop-checkbox" @click="checkClick"
               :class="{active:this.product.checked===true?'active': ''}"></div>
          <a href="">{{ product.name }}</a>
        </div>
      </h3>
      <div class="goods">
        <div class="cart-goods">
          <div class="checkbox-wrap">
            <div class="cartgood-goodcheck" :class="{active:this.product.checked===true?'active': ''}"
                 @click="checkClick"></div>
          </div>
          <a href="" class="cart-goods-pic">
            <div class="mid-img">
              <img
                :src="product.image"
                alt="">
            </div>
          </a>
          <div class="c-goods-desc">
            <div class="cgood-desc-ts">
              <div class="cgood-desc-ts-title">
                <a href="#">
                  <h5>{{ product.title }}</h5>
                </a>
              </div>
              <div class="ui-skuDesc">{{ product.style }}；</div>
              <div class="ui-skuTagswrap">
                <div class="ui-skuTag">付款后最晚于3日内发货</div>
                <div class="ui-skuTag-border">降价8.55元</div>
              </div>
            </div>
            <div class="ui-sku-number">
              <div class="ui-price-wrap">
                <div class="ui-now-price">
                  <span>￥</span>
                  {{ product.price }}
                </div>
              </div>
              <div class="ui-number">
                <div class="ui-modify">
                  <span>-</span>
                </div>
                <div class="m-icon-minus">
                  <span>{{ product.count }}</span>
                </div>
                <div class="ui-add">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  components: {
    // CheckButton
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    checkClick () {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped lang="scss">
.cart-list-item {
  width: 357px;
  padding: 20px 15px;
  margin: 9px;
  border-radius: 5px;
  background-color: #fff;

  .shop-head {
    height: 20px;
    background-color: #fff;
    font-size: 14px;
    color: #333;

    .shop-head-item {
      display: flex;

      .shop-checkbox {
        position: relative;
        margin-right: 9px;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border: 1px solid #d7d7d7;
        border-radius: 100%;
      }

      .active {
        width: 20px;
        height: 20px;
        background: url("~assets/img/cart/checkButton.png");
        background-size: 20px 20px;
        border: none;
      }

      a {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 700;
        color: #333;
      }
    }
  }

  .goods {
    overflow: hidden;
    background-color: #fff;

    .cart-goods {
      //position: relative;
      display: flex;
      margin-top: 20px;

      .checkbox-wrap {
        position: relative;
        width: 30px;
        height: 20px;

        .cartgood-goodcheck {
          position: relative;
          top: 42px;
          margin-right: 9px;
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #d7d7d7;
          border-radius: 100%;
          color: #424242;
          vertical-align: middle;
        }

        .active {
          width: 20px;
          height: 20px;
          background: url("~assets/img/cart/checkButton.png");
          background-size: 20px 20px;
          border: none;
        }
      }

      .cart-goods-pic {
        position: relative;
        display: block;
        width: 69px;
        height: 92px;
        border-radius: 2px;
        margin-left: 8px;
        margin-right: 8px;

        .mid-img {
          img {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            width: auto;
            display: block;
          }
        }
      }

      .c-goods-desc {
        flex: 1;
        margin-left: 9px;
        background-color: #fff;

        .cgood-desc-ts {
          .cgood-desc-ts-title {
            margin: 0px 0px 6px;

            a {
              h5 {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                color: #333;
                font-size: 12px;
                line-height: 1.5;
              }
            }
          }

          .ui-skuDesc {
            margin: 0 0 6px;
            font-size: 10px;
            color: #ababab;
            background-color: #f7f7f7;
            padding: 0 12px 0 6px;
          }

          .ui-skuTagswrap {
            display: flex;
            font-size: 12px;
            color: #ff5777;

            .ui-skuTag {
              margin: 0 3px 3px 0;
              padding: 0 2.5px;
              background-color: #FFE6E8;
              white-space: nowrap;
              text-align: center;
            }

            .ui-skuTag-border {
              margin: 0 3px 3px 0;
              padding: 0 2px;
              white-space: nowrap;
              background-color: #fff;
              border: 1px solid #ff5777;
            }
          }
        }

        .ui-sku-number {
          margin: 6px 0 0;
          display: flex;
          justify-content: space-between;

          .ui-price-wrap {
            .ui-now-price {
              color: #f46;

              span {
                margin-right: 1px;
                font-size: 10px;
              }
            }
          }

          .ui-number {
            height: 22px;
            line-height: 22px;
            background-color: #f7f7f7;
            border-radius: 14px;
            display: flex;
            text-align: center;

            .ui-modify {
              flex: 1;
              width: 25px;
              height: 22px;
              color: #ababab;
            }

            .m-icon-minus {
              flex: 1;
              width: 30px;
              height: 22px;
            }

            .ui-add {
              flex: 1;
              width: 25px;
              height: 22px;
              color: #ababab;
            }
          }
        }
      }
    }
  }

  //.active {
  //  background: url("~assets/img/cart/checkButton.png");
  //  background-size: 20px 20px;
  //  border: none;
  //}
}
</style>
