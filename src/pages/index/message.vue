<template>
  <div class="container">
    <swipe :movies="imagedata"></swipe>
    <view class="van-hairline--top-bottom">热销品<a href="/pages/product/main">更多></a></view>
    <div v-for="(item,index) in goodlist" :key='index'>
      <mygoodlist :info="item"></mygoodlist>
    </div>
    <div class="clearfix"></div>
    <van-tabbar :active="active" @change="changeTabber" z-index="5">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" info="5">消息</van-tabbar-item>
      <van-tabbar-item icon="cart" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="gold-coin">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import swipe from "@/components/swipe.vue";
import mygoodlist from "@/components/goodlist.vue";
import "./index.wxss";
export default {
  components: { swipe, mygoodlist },
  data() {
    return {
      active: 0,
      imagedata: [
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg" }
      ],
      goodlist: [{
        src: "/static/image/1.jpg",
        desc: "测试产品1测试产品1测试产品1测试产品1测试产品1",
        price: "12",
        number: 10
      }, {
        src: "/static/image/2.jpg",
        desc: "测试产品2测试产品2测试产品2测试产品2测试产品2",
        price: "24",
        number: 15
      }, {
        src: "/static/image/3.jpg",
        desc: "测试产品3测试产品3测试产品3测试产品3测试产品3",
        price: "26",
        number: 20
      }, {
        src: "/static/image/1.jpg",
        desc: "测试产品4测试产品4测试产品4测试产品4测试产品4",
        price: "28",
        number: 25
      }]
    }
  },
  methods: {
    getUserInfo() {
      this.$http.get("/api/information/news", { page: 1, limit: 15 }).then((d) => {
        console.log(d)
      })
    },
    getRadioResult() {
      let args = Array.from(arguments);
      console.log(args);
    },
    changeTabber(event) {
      switch (event.mp.detail) {
        case 0:
          // statements_1
          break;
        case 1:
          this.$router.push("/pages/message/index")
          break;
        case 2:
          // statements_1
          break;
        case 3:
          // statements_1
          break;
      }
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}

</script>
<style scoped>
.van-hairline--top-bottom {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.van-hairline--top-bottom a {
  float: right;
  padding-right: 10px;
}

.clearfix {
  clear: both;
}

</style>
