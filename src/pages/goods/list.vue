<template>
  <div class="container">
    <div class="top">
      <van-tabs :active="active" line-width="100" @change="changeTab">
        <van-tab title="标签 1"></van-tab>
        <van-tab title="标签 2"></van-tab>
        <van-tab title="标签 3"></van-tab>
        <van-tab title="标签 4"></van-tab>
        <van-tab title="标签 5"></van-tab>
        <van-tab title="标签 6"></van-tab>
      </van-tabs>
    </div>
    <div class="clearfix"></div>
    <div class="web-font">
      {{string}}
    </div>
  </div>
</template>
<script>
import "./goods.wxss";
export default {
  data() {
    return {
      hidden: true,
      list: [],
      scrollTop: 0,
      scrollHeight: 0,
      string: ''
    }
  },
  methods: {
    changeTab(event) {
      console.log(event)
    },
    getData() {
      console.log(111212);
    }
  },
  onLoad: function() {
    this.string = this.getLoadingData();
  },
  onPullDownRefresh: function() {
    this.string = "";
    this.string = this.getLoadingData();
  },
  onReachBottom: function() {
    this.string += this.getLoadingData();
  },
  methods: {
    getLoadingData() {
      return "内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一内容一";
    }
  }
};

</script>
<style scoped>
</style>
