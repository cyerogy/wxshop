<template>
  <swiper class="container" :indicator-dots="indicator" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
    <block v-for="(item,index) in movies" :key='index'>
      <swiper-item>
        <image :src="item.src" class="slide-image" mode="aspectFill" />
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
  data() { return {} }
}

</script>
<style>
swiper {
  height: 280px !important
}

</style>
