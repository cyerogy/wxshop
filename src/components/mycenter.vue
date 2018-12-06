<template>
  <div class="container">
    <div class="my-backgroud">
      <img src="/static/image/mybackgroud.png">
      <div class="div-img web-font">积分</div>
    </div>
    <!-- 订单 -->
    <div class="my-order">
      <div class="order-title"><i class="web-font">我的订单</i></div>
      <div class="order-list">
        <van-row>
          <van-col span="6" style="text-align:center;">
            <a @click="clickOrderUrl">
              <i class="iconfont icon-weibiaoti2fuzhi04"></i>
              待付款
            </a>
          </van-col>
          <van-col span="6" style="text-align:center;">
            <a @click="clickOrderUrl">
            <i class="iconfont icon-daifahuo"></i>
            待发货
          </a>
          </van-col>
          <van-col span="6" style="text-align:center;">
            <a @click="clickOrderUrl">
            <i class="iconfont icon-daishouhuo"></i>
            待收货
          </a>
          </van-col>
          <van-col span="6" style="text-align:center;">
            <a @click="clickOrderUrl">
            <i class="iconfont icon-yiwanchengdingdan"></i>
            已完成
          </a>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 其他 -->
    <div class="my-other">
      <van-cell-group>
        <van-cell title="收货地址" is-link arrow-direction="right" url="/pages/dashboard/index" />
        <van-cell title="消息列表" is-link arrow-direction="right" url="/pages/dashboard/index" />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  onLoad() {
    console.log(11)
  },
  methods: {
    clickOrderUrl() {
      console.log(121)
    }
  }
}

</script>
<style scoped>
.my-backgroud {
  width: 100%;
  height: 150px;
  background: linear-gradient(#4b0, #fafafa);
}

.my-backgroud img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-top: 20px;
  margin-left: 20px;
}

.div-img {
  margin-top: 25px;
  height: 40px;
  line-height: 40px;
  background: #44bb00;
  opacity: 0.5;
  color: #fff;
  padding-left: 20px;
}

.my-order,
.my-other {
  background: #fff;
}

.order-title {
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  border-bottom: 1px solid #f3f3f3;
}

.my-other {
  margin-top: 10px;
}

</style>
