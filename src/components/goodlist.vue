<template>
  <div class="container">
    <div v-for="(item,index) in goodlist" :key='index'>
      <a class="product-info">
      <image :src="item.src" class="prouduct-slide-image" mode="aspectFill" />
      <div class="image-title">
        {{item.desc}}
      </div>
      <div class="product-price">
        <span class="price">￥{{item.price}}</span><span class="number">{{item.number}}人付款</span>
      </div>
    </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodlist: {
      type: Array,
      default: [],
    },
  },
  data() { return {} }
}

</script>
<style>
.product-info {
  float: left;
  width: 42%;
  margin: 4%;
  background: #fff;
  border-radius: 8px;
}

.prouduct-slide-image {
  padding-top: 15px;
  width: 100%;
  height: 150px;
}

.image-title {
  padding: 15px;
  overflow: hidden;
  height: 30px;
  font-size: 16px;
}

.product-price {
  margin-top: 15px;
  padding-left: 15px;
}

.product-price .price {
  font-size: 20px;
  color: red;
}

.product-price .number {
  font-size: 14px;
  padding-left: 5px;
}

</style>
