<template>
  <swiper class="container" :indicator-dots="indicator" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" v-bind:style="{height: imageHeight + 'px' }">
    <block v-for="(item,index) in movies" :key='index'>
      <swiper-item>
        <image :src="item.src" class="slide-image" mode="aspectFill" style="width: 100%;height:100%" />
      </swiper-item>
    </block>
  </swiper>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array,
      default: []
    },
    indicator: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    duration: {
      type: Number,
      default: 1000
    },
    circular: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return { imageHeight: 0 }
  },
  onLoad() {
    var that = this;
    var image_url = this.movies[0]['src'];
    wx.getImageInfo({
      src: image_url,
      success: function(res) {
        that.imageHeight = res.height;
      }
    })
  }
}

</script>
<style>
swiper {
  height: 295px !important
}

</style>
