<template>
  <div class="container">
    <div v-for="(item,index) in goodlist" :key='index'>
      <a class="product-info" @click="clickUrl(item.id)">
      <image :src="item.src" class="prouduct-slide-image" mode="aspectFill" />
      <div class="image-title">
        {{item.desc}}
      </div>
      <div class="product-price">
        <span class="price">￥{{item.price}}</span>
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
  data() { return {} },
  methods: {
    clickUrl(id) {
      this.$router.push({ path: '/pages/goods/detail', query: { id: id } })
    }
  }
}

</script>
<style>
.product-info {
  float: left;
  width: 29%;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 8px;
}

.prouduct-slide-image {
  padding-top: 15px;
  width: 100%;
  height: 100px;
}

.image-title {
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 95%;
  font-size: 13px;
}

.product-price {
  text-align: center
}

.product-price .price {
  font-size: 16px;
  color: red;
}

</style>
