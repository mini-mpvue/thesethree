<template>
  <div class="category-container clearfix">
      <div class="categroy-left">
        <div v-for="(item,index) in category" :key="index"
            @tap="switchTab(index)"
            :class="['cate-list',curIndex === index?'on':'']">{{item.name}}</div>
      </div>
      <scroll-view class="categroy-right" :scroll-y="isScroll" :scroll-into-view="toView" :scroll-with-animation="true">
          <div :id="item.id" class="cate-box" v-for="(item,index) in detail" :key="index">
              <div class="cate-banner">
                  <image :src="item.banner" mode="scaleToFill"></image>
              </div>
              <div class="cate-title">
                  <span>{{item.cate}}</span>
              </div>
              <div class="product">
                  <div class="product-list" v-for="(val,i) in item.detail" :key="i">
                      <a href="/pages/category/list/main">
                          <image :src="val.thumb"></image>
                          <div class="classname"><text>{{val.name}}</text></div>
                      </a>
                  </div>
              </div>
          </div>
      </scroll-view>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  data () {
    return {
      category: [],
      detail:[],
      curIndex: 0,
      isScroll: false,
      toView: ''
    }
  },

  components: {

  },

  methods: {
    switchTab(index){
      this.isScroll=true
      setTimeout(()=>{
        this.toView=this.category[index].id,
        this.curIndex=index
      },0);
      setTimeout(()=>{
        this.isScroll=false
      },1)
    }
  },

  created () {

  },
  async mounted () {
    let result=await api.getCateGory();
    // console.log('res',this.result);
    if(result.code===200){
      this.category=result.data.cate;
      this.detail=result.data.list;
    }
    this.toView=this.category[0].id||'html';
  }
}
</script>
<style>
 page{
  height: 100%;
  }
</style>
<style lang="less" scoped>
@import url("~@/styles/index.less");
.category-container{
    height: 100%;
}
.categroy-left{
    float: left;
    width: 150rpx;
    height: 100%;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    font-size:28rpx;
    .cate-list{
      height: 90rpx;
      line-height: 90rpx;
      text-align: center;
      border-left: 3px solid #fff;
      &.on{
        color: @primary-color;
        border-color: @primary-color;
      }
    }
}
.categroy-right{
    float: right;
    width: 600rpx;
    height: 100%;
    overflow: hidden;
}
.cate-box{
    height: 100%;
    padding:40rpx;
    box-sizing: border-box;
    .cate-banner image{
      display: block;
      width: 100%;
      height: 250rpx;
    }
}
.cate-title{
    position: relative;
    height: 30rpx;
    line-height: 30rpx;
    padding:30rpx 0 55rpx;
    text-align: center;
    color: @primary-color;
    font-size: 28rpx;
    &::before{
      position: absolute;
      left: 130rpx;
      top: 43rpx;
      content: '';
      width: 70rpx;
      height: 4rpx;
      background: @primary-color;
    }
    &::after{
      position: absolute;
      right: 130rpx;
      top: 43rpx;
      content: '';
      width: 70rpx;
      height: 4rpx;
      background: @primary-color;
    }
}

.product-list{
    display: inline-block;
    width: 160rpx;
    height: 160rpx;
    text-align: center;
    margin:0 20rpx 20rpx 0;
    font-size: 24rpx;
    image{
      width: 80rpx;
      height: 80rpx;
      margin-bottom: 20rpx;
    }
    &:nth-child(3n){
      margin-right: 0;
    }
}

</style>
