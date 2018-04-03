<template>
  <div class="category-detail-container">
    <div class="detail-list">
      <div class="detail-item" v-for="(item,index) in 6" :key="index">
        <div class="detail-content">
          <div class="flex-between">
            <div>
              <span class="name">数据库</span>
              <span class="desp">MySQL</span>
            </div>
            <span class="recommend">推荐</span>
          </div>
          <div class="desp-detail">
            索引的作用
          </div>
        </div>
        <div class="detail-bottom">
          时间:<span>2018/4/3</span>
        </div>
      </div>
      <div class="is-empty" v-show="false">
        <div class="empty-tip">
          空空如也
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  data () {
    return {

    }
  },

  components: {

  },

  methods: {

  },

  created () {

  },
  mounted () {
    wx.setNavigationBarTitle({
      title: '数据库'
    })
  }
}
</script>

<style lang="less"  rel="stylesheet/less" scoped>
@import url("~@/styles/index.less");
.category-detail-container{
  height: 100%;
  background-color:@color-b05;
  .font-28();
  .detail-list{
    padding-top:30rpx;
    .detail-item{
      padding:30rpx 30rpx 20rpx;
      margin-bottom:30rpx;
      background-color:@color-white;
      .detail-content{
        padding-bottom: 30rpx;
        .name{
          margin-right:50rpx;
        }
        .desp-detail{
          margin:30rpx 0 10rpx 0;
        }
        .recommend{
          color:@color-red;
        }
      }
      .detail-bottom{
        border-top:solid 1rpx @color-b03;
        padding-top:20rpx;
        text-align:right;
        color:@color-b03;
      }
    }
    .is-empty{
      hegiht:400rpx;
      line-height:400rpx;
      background-color:@color-white;
      text-align:center;
      .empty-tip{
        .font-36();
        margin-bottom:30rpx;
      }
    }
  }
}

</style>
