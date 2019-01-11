<template>
  <div class="container">
    <van-tabs :active="orderstatus" @change="changeStatus">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
    <div class="web-font"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderstatus: 0
    }
  },
  onLoad() {
    this.orderstatus = this.$route.query.orderstatus
  },
  methods: {
    changeStatus() {

    }
  }
}

</script>
