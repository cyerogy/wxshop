<template>
  <div class="container">
    <div class="clearfix"></div>
    <div class="tabbar-div">
      <van-tabbar :active="selectindex" @change="changeTabber" z-index="5">
        <van-tabbar-item icon="home">首页</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
        <van-tabbar-item icon="cart" info="5">购物车</van-tabbar-item>
        <van-tabbar-item icon="gold-coin">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectindex: {
      type: Number,
      default: 0
    }
  },
  data() { return {} },
  created() {},
  methods: {
    changeTabber(event) {
      let that = this;
      this.$emit("importData", {
        showindex: event.mp.detail,
      });
    }
  }
}

</script>
<style scoped>
.tabbar-div {
  height: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.clearfix {
  clear: both;
}

</style>
