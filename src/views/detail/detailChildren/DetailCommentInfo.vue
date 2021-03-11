<template>
  <div>
    <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
      <div class="info-header">
        <a href="#">
          <span class="header-num">买家评价 {{ commentInfo.cRate }}</span>
          <span>
          <img src="~assets/img/detail/right.png" alt="">
        </span>
        </a>
      </div>
      <div class="info-user">
        <img :src="commentInfo.list[0].user.avatar" alt="">
        <span>{{ commentInfo.list[0].user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.list[0].content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.list[0].created | showDate }}</span>
          <span>{{ commentInfo.list[0].style }}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.list[0].images" :key="index">
        </div>
      </div>
      <div class="reply" v-if="commentInfo.list[0].explain">
        <p>{{ commentInfo.list[0].explain }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped lang="scss">
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 8px solid #eaeaea;

  .info-header {
    height: 50px;
    line-height: 50px;

    a {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #999;

      .header-num {
      }

      span {
        img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
  }

  .info-user {
    padding: 10px 0 5px;

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    span {
      position: relative;
      top: -15px;
      margin-left: 10px;
      font-size: 14px;
      color: #424242;
    }
  }

  .info-detail {
    padding: 0 5px 15px;

    p {
      font-size: 14px;
      color: #727272;
      line-height: 1.5;
    }

    .info-other {
      margin-top: 10px;
      font-size: 12px;
      color: #999;

      .date {
        margin-right: 8px;
      }
    }

    .info-imgs {
      margin-top: 10px;

      img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
      }
    }
  }

  .reply {
    padding: 15px 0;
    border-top: 1px dotted #d9d9d9;

    p {
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
