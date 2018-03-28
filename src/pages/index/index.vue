<template>
  <div class="container">
    <swiper class="slider-wrap" :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="1000" indicator-active-color="#AB956D">
      <swiper-item v-for="slide in slides" :key="slide.id">
        <image :src="slide.image" class="slide-image" mode="aspectFill"/>
      </swiper-item>
    </swiper>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
  <!--
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <p>开发人员：</p>
    <div class="name">
      <div v-for="(item,index) in nameList" :key="index">
        {{item.name}}
      </div>
    </div>
     <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> 
    
    
  </div>
  -->
</template>

<script>
import card from '@/components/card'
import api from '@/utils/api'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      nameList:[],
      slides:[]
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    async getNames(){
      
      let result = await api.getNameList();
      
      if(result.code===200){
          this.nameList=result.data;
          console.log(this.nameList);
      }
    },
    async getSlides(){
      
      let result = await api.getSlides();
      
      if(result.code===200){
          this.slides=result.data;
          console.log(this.slides);
      }
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  mounted () {
  
    this.getNames()
    this.getSlides()
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/index.less");
.slider-wrap {
  width: 100%;
  height: 400rpx;
  .slide-image {
    width: 100%;
    height: 100%;
  }
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: @primary-color;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
