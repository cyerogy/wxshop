<template>
  <div class="container">
    <div v-if="showflag == 0 || showflag==1">
      <van-search :value="searchkey" placeholder="请输入搜索关键词" @search="onSearch" />
    </div>
    <!-- 首页 -->
    <div v-if="showflag == 0">
      <swipe :movies="imagedata"></swipe>
      <div class="index-good-list">
        <view class="van-hairline--top-bottom">热销品<a href="/pages/goods/list">更多></a></view>
        <mygoodlist :goodlist="goodlist"></mygoodlist>
        <div class="clearfix"></div>
      </div>
    </div>
    <!-- 分类 -->
    <div v-if="showflag == 1">
      <category></category>
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
import category from "@/components/category.vue";
import "./index.wxss";
export default {
  components: { swipe, mygoodlist, tabber, cart, category },
  data() {
    return {
      active: 0,
      showflag: 0,
      searchkey: '',
      imagedata: [
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg" }
      ],
      goodlist: [{
        id: 1,
        src: "/static/image/1.jpg",
        desc: "测试产品1测试产品1测试产品1测试产品1测试产品1",
        price: "12",
        number: 10
      }, {
        id: 2,
        src: "/static/image/2.jpg",
        desc: "测试产品2测试产品2测试产品2测试产品2测试产品2",
        price: "24",
        number: 15
      }, {
        id: 3,
        src: "/static/image/3.jpg",
        desc: "测试产品3测试产品3测试产品3测试产品3测试产品3",
        price: "26",
        number: 20
      }, {
        id: 4,
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
        tag: '爆款'
      }, {
        src: "/static/image/2.jpg",
        desc: "测试产品2测试产品2测试产品2测试产品2测试产品2",
        title: '测试产品2',
        origin_price: "25",
        price: "24",
        number: 1
      }, {
        src: "/static/image/3.jpg",
        desc: "测试产品3测试产品3测试产品3测试产品3测试产品3",
        title: '测试产品3',
        origin_price: "30",
        price: "26",
        number: 1
      }, {
        src: "/static/image/1.jpg",
        desc: "测试产品4测试产品4测试产品4测试产品4测试产品4",
        title: '测试产品4',
        origin_price: "40",
        price: "28",
        number: 2
      }]
    }
  },
  methods: {
    getUserInfo() {
      this.$http.get("/api/information/news", { page: 1, limit: 15 }).then((d) => {
        console.log(d)
      })
    },
    changeTabber(event) {
      this.showflag = event.mp.detail;
    },
    changeTabbarData() {
      var args = Array.from(arguments);
      var showindex = args[0]['showindex'];
      var title = "";
      switch (parseInt(showindex)) {
        case 0:
          title = "首页"
          break;
        case 1:
          title = "分类"
          break;
        case 2:
          title = "购物车"
          break;
        case 3:
          title = "我的"
          break;
      }
      wx.setNavigationBarTitle({
        title: title
      })
      this.showflag = showindex;
    },
    onSearch(event) {
      this.searchkey = event.mp.detail;
      console.log(this.searchkey)
    },
    onCancel() {

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

.index-good-list {
  background: #fff;
  margin-top: 15px;
}

</style>
