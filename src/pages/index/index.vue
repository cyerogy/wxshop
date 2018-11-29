<template>
  <div class="container">
    <!-- 首页 -->
    <div v-if="showflag == 0">
      <swipe :movies="imagedata"></swipe>
      <view class="van-hairline--top-bottom">热销品<a href="/pages/product/main">更多></a></view>
      <mygoodlist :goodlist="goodlist"></mygoodlist>
      <div class="clearfix"></div>
    </div>
    <!-- 消息中心 -->
    <div v-if="showflag == 1">
      <van-panel title="标题" desc="描述信息">
      </van-panel>
      <div class="clearfix"></div>
    </div>
    <!-- 购物车-->
    <div v-if="showflag == 2">
      <cart :cartgood="cartgoodlist"></cart>
      <div class="clearfix"></div>
    </div>
    <tabber :selectindex="active" @importData="changeTabbarData" ref="tabberref"></tabber>
  </div>
</template>
<script>
import swipe from "@/components/swipe.vue";
import mygoodlist from "@/components/goodlist.vue";
import tabber from "@/components/tabber.vue";
import cart from "@/components/cart.vue";
import "./index.wxss";
export default {
  components: { swipe, mygoodlist, tabber, cart },
  data() {
    return {
      active: 2,
      showflag: 2,
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
      }],
      cartgoodlist: [{
        src: "/static/image/1.jpg",
        desc: "测试产品1测试产品1测试产品1测试产品1测试产品1",
        title: '测试产品1',
        origin_price: "20",
        price: "12",
        number: 1,
        tag: '爆款',
        checked: false
      }, {
        src: "/static/image/2.jpg",
        desc: "测试产品2测试产品2测试产品2测试产品2测试产品2",
        title: '测试产品2',
        origin_price: "25",
        price: "24",
        number: 1,
        checked: true
      }, {
        src: "/static/image/3.jpg",
        desc: "测试产品3测试产品3测试产品3测试产品3测试产品3",
        title: '测试产品3',
        origin_price: "30",
        price: "26",
        number: 1,
        checked: false
      }, {
        src: "/static/image/1.jpg",
        desc: "测试产品4测试产品4测试产品4测试产品4测试产品4",
        title: '测试产品4',
        origin_price: "40",
        price: "28",
        number: 2,
        checked: false
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
      this.showflag = event.mp.detail;
    },
    changeTabbarData() {
      var args = Array.from(arguments);
      this.showflag = args[0]['showindex'];
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
