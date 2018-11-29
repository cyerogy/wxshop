<template>
  <div class="container">
    <div v-for="(item,index) in cartgood" :key="index" class="cart-list">
      <van-row type="flex" align="center">
        <van-col span="2">
          <van-checkbox v-model="item.checked" checked-color="#4b0" @change="changeCheckbox(index)"></van-checkbox>
        </van-col>
        <van-col span="22">
          <van-card :tag="item.tag" :desc="item.desc" :title="item.title" :thumb="item.src">
            <div slot="tags">
              <span class="priceclass">￥{{item.price}}</span>
            </div>
            <div slot="footer">
              <van-stepper v-model="item.number" size="mini" />
            </div>
          </van-card>
        </van-col>
      </van-row>
    </div>
    <div class="submit-bar-div">
      <van-submit-bar :price="allprice" button-text="结算" @submit="onClickButton">
        <van-checkbox v-model="allchecked" checked-color="#4b0" @change="changeAllCheckbox()">全选</van-checkbox>
        <van-button type="default" class="submit-bar-delete" size="large">删除</van-button>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import "./tabber.vue";
export default {
  props: {
    cartgood: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      allchecked: true,
      allprice: 3050
    };
  },
  methods: {
    changeCheckbox(index) {
      if (this.cartgood[index]["checked"]) {
        this.cartgood[index]["checked"] = false;
      } else {
        this.cartgood[index]["checked"] = true;
      }
    },
    changeAllCheckbox() {
      if (this.allchecked) {
        this.allchecked = false;
      } else {
        this.allchecked = true;
      }
    },
    onClickButton() {}
  }
};
</script>
<style scoped>
.cart-list {
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}

.priceclass {
  color: red;
  font-size: 16px;
}

.submit-bar-div {
  position: fixed;
  bottom: 50px;
  z-index: 100;
  width: 100%;
}

.submit-bar-delete {
  position: fixed;
  right: 70px;
  width: 70px;
}
</style>
