<template>
  <div class="container">
    <swipe :movies="imagedata"></swipe>
    <div class="detail-info">
      <div class="detail-title">产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一产品一</div>
      <div class="detail-detail">
        <div class="detail-price"><span class="symbol">￥</span><span class="price">166</span></div>
        <div class="detail-orgin-price">￥188</div>
        <div class="number">销量：1888</div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="detail-info">
      <van-cell-group>
        <van-cell title="规格" value="选择" @click="selectProduct" />
      </van-cell-group>
    </div>
    <div class="clearfix"></div>
    <div class="detail-info">
      <van-tabs :active="active" @change="changeTab">
        <van-tab title="详情">详情</van-tab>
        <van-tab title="评价">评价</van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat" text="客服" bind:click="onClickIcon" />
      <van-goods-action-icon icon="cart" text="购物车" bind:click="onClickIcon" />
      <van-goods-action-button text="加入购物车" bind:click="onClickButton" />
    </van-goods-action>
    <van-popup :show="show" position="bottom" overlay="false" close-on-click-overlay="false" class="popup-modal">
      <div style="position:relative">
        <div class="popup-image-div">
          <image src="/static/image/1.jpg" />
        </div>
        <div class="popup-price">
          <span class="symbol">￥</span><span class="price">166</span>
          <br />
          <span class="stock">库存：9999</span>
        </div>
        <van-icon name="close" @click="closeDetail" class="popup-close"></van-icon>
        <div class="clearfix"></div>
        <div class="line"></div>
        <div class="product-attribute">
          <van-row>
            <van-col span="4"><label>数量</label></van-col>
            <van-col offset="12" span="8">
              <van-stepper value="1" @change="changeNumber" />
            </van-col>
          </van-row>
        </div>
        <van-button type="danger" size="large" style="position:fixed;bottom:0px;width:100%" @click="selectAttribute">加入购物车</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
import swipe from "@/components/swipe.vue";
import "./goods.wxss";
export default {
  components: { swipe },
  data() {
    return {
      active: 0,
      show: false,
      imagedata: [
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg" },
        { src: "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg" }
      ]
    };
  },
  onLoad() {
    this.show = false;
    console.log(this.$route.query.id)
  },
  methods: {
    closeDetail() { this.show = false; },
    selectProduct() {
      this.show = true;
    },
    changeNumber(event) {
      this.number = event.mp.detail;
    },
    selectAttribute() {

    },
    changeTab() {

    }
  }
};

</script>
<style scoped>
.product-attribute {
  margin: 15px;
}

.detail-info {
  background: #fff;
}

.detail-title {
  padding: 15px;
  line-height: 25px;
  height: auto;
  color: #000;
  font-weight: 500
}

.detail-price,
.detail-orgin-price,
.number {
  float: left;
}

.detail-price {
  color: red;
  font-weight: 20px;
  margin-left: 15px;
}

.detail-price .symbol {
  font-size: 16px;
}

.detail-price .price {
  font-size: 20px;
}

.detail-orgin-price {
  margin-left: 15px;
  margin-right: 15px;
  text-decoration: line-through
}

.detail-orgin-price,
.number {
  margin-top: 4px;
  font-size: 16px;
}

.popup-close {
  float: right;
  margin-top: 8px;
  margin-right: 10px;
}

.popup-modal {
  padding-bottom: 50px;
}

.popup-image-div {
  width: 120px;
  height: 120px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #EBEBEB;
  position: absolute;
  top: -60px;
  left: 8px;
}

.popup-image-div image {
  width: 120px;
  height: 120px;
  overflow: visible !important;
}

.popup-price {
  margin-left: 155px;
  float: left;
  margin-top: 23px;
}

.popup-price .symbol {
  font-size: 16px;
  color: red;
}

.popup-price .price {
  font-size: 20px;
  color: red;
}

.stock {
  font-size: 14px;
  color: #333;
}

.line {
  margin-top: 10px;
  height: 1px;
  border-top: 1px solid #f1f1f1;
}

label {
  font-size: 14px;
  color: #333;
  font-weight: 10;
}

.detail-info {
  background: #fff;
  margin-top: 10px;
}

</style>
