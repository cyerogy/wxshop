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
              <van-stepper :id="index" v-model="item.number" size="mini" @change="changeNumber" />
            </div>
          </van-card>
        </van-col>
      </van-row>
    </div>
    <van-dialog id="van-dialog" />
    <div class="submit-bar-div">
      <van-submit-bar :price="allprice" button-text="结算" @submit="onClickButton">
        <van-checkbox v-model="allchecked" checked-color="#4b0" @change="changeAllCheckbox()">全选</van-checkbox>
        <van-button type="default" class="submit-bar-delete" size="large" @click="deleteCartGood">删除</van-button>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import Dialog from '../../static/vant/dialog/dialog';
export default {
  props: {
    cartgood: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      allchecked: false,
      allprice: 0
    };
  },
  onLoad() {
    for (var i = 0; i < this.cartgood.length; i++) {
      this.cartgood[i]["checked"] = false;
    }
    console.log("获取购物车里的数据")
  },
  methods: {
    changeCheckbox(index) {
      if (this.cartgood[index]["checked"]) {
        this.cartgood[index]["checked"] = false;
      } else {
        this.cartgood[index]["checked"] = true;
      }
      this.checkAllSelectProduct();
      this.calculatePrice();
    },
    checkAllSelectProduct() {
      //获取选中的产品数量
      var number = 0;
      for (var i = 0; i < this.cartgood.length; i++) {
        if (this.cartgood[i]["checked"]) {
          number++;
        }
      }
      if (number == this.cartgood.length) {
        this.allchecked = true;
      } else {
        this.allchecked = false;
      }
    },
    changeNumber(event) {
      var changeindex = Number(event.currentTarget.id);
      this.cartgood[changeindex]['number'] = event.mp.detail
      this.calculatePrice();
    },
    changeAllCheckbox() {
      if (this.allchecked) {
        this.allchecked = false;
      } else {
        this.allchecked = true;
      }
      for (var i = 0; i < this.cartgood.length; i++) { this.cartgood[i]["checked"] = this.allchecked; }
      this.calculatePrice();
    },
    calculatePrice() {
      //计算总价
      var allprice = 0;
      for (var i = 0; i < this.cartgood.length; i++) {
        if (this.cartgood[i]["checked"]) {
          allprice += this.cartgood[i]['price'] * this.cartgood[i]['number'];
        }
      }
      this.allprice = allprice * 100;
    },
    deleteCartGood() {
      Dialog.confirm({
        title: '删除',
        message: '您确定要删除吗？'
      }).then(() => {
        var temparr = [];
        for (var i = 0; i < this.cartgood.length; i++) {
          if (!this.cartgood[i]["checked"]) {
            temparr.push(this.cartgood[i]);
          }
        }
        this.cartgood = temparr;
        this.calculatePrice();
      }).catch(() => {
        // on cancel
      });
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
  z-index: 10;
  width: 100%;
}

.submit-bar-delete {
  position: fixed;
  right: 70px;
  width: 70px;
}

</style>
