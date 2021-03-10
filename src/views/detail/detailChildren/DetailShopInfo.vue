<template>
  <div class="detail-shopInfo">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            <span>{{ shop.sells | sellCountFilter }} </span>
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div>
            <span class="goods-count">{{ shop.goodsCount }}</span>
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter (value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped lang="scss">
.detail-shopInfo {
  padding: 25px 8px;
  border-bottom: 8px solid #eaeaea;
  background-color: #fff;

  .shop-top {
    display: flex;
    line-height: 45px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #eaeaea;
    }

    .shop-name {
      margin-left: 10px;
      color: $color-text;
    }
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;

    .shop-middle-left {
      display: flex;
      justify-content: space-evenly;
      flex: 1;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, .1);
      color: #333;

      .info-sells {
        .sells-count {
          font-size: 18px;
        }

        .sells-text {
          margin-top: 10px;
          font-size: 12px;
          color: #333;
        }
      }

      .info-goods {
        .goods-count {
          font-size: 18px;
        }

        .goods-text {
          margin-top: 10px;
          font-size: 12px;
          color: #333;
        }
      }
    }

    .shop-middle-right {
      flex: 1;
      color: #333;
      font-size: 13px;

      table {
        width: 120px;
        margin-left: 30px;

        tr {
          td {
            padding: 5px 0;
          }

          .score {
            color: #5ea732;
          }

          .better {
            span {
              background-color: #5ea732;
              color: #fff;
              text-align: center;
            }
          }

          .score-better {
            color: #f13e3a;
          }

          .better-more {
            span {
              background-color: #f13e3a;
            }
          }
        }
      }
    }
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;

    .enter-shop {
      display: inline-block;
      font-size: 14px;
      background-color: #f2f5f8;
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
    }
  }
}
</style>
