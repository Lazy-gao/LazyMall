<template>
  <div class="detail-baseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      <span>{{ goods.title }}</span>
    </div>
    <div class="info-price">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount"
            :style="{background: goods.discount==='' ? 'none': goods.discountBgColor}">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
      <span class="more">
        <img src="~assets/img/detail/right.png" alt="">
      </span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length -1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
    <div class="info-style">
      <span class="text">请选择：颜色 尺码</span>
      <span class="style-more">
        <img src="~assets/img/detail/right.png" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.detail-baseInfo {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;

  .info-title {
    text-align: left;
    line-height: 24px;
    color: #333;
  }

  .info-price {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 8px solid #eaeaea;

    .newPrice {
      color: $color-tint;
      font-size: 30px;
    }

    .oldPrice {
      margin-left: 5px;
      font-size: 16px;
      text-decoration: line-through;
    }

    .discount {
      position: relative;
      top: -8px;
      margin-left: 5px;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 8px;
      color: #fff;
    }
  }

  .info-other {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    line-height: 30px;
    padding-bottom: 10px;
    border-bottom: 8px solid #eaeaea;
    font-size: 13px;

    .more {
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    line-height: 30px;
    font-size: 13px;
    padding-bottom: 10px;
    border-bottom: 8px solid #eaeaea;

    .info-service-item {
      img {
        position: relative;
        top: 2px;
        width: 14px;
        height: 14px;
      }
    }
  }

  .info-style {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 8px solid #eaeaea;

    .text {
      color: #666;
      font-size: 14px;
    }

    .style-more {
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }
}
</style>
