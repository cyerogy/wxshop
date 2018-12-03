<template>
  <div class="container">
    商品详情
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      allchecked: false,
      allprice: 0
    };
  },
  onLoad() {
    console.log(this.$route.query.id)
  },
  methods: {}
};

</script>
<style scoped>
</style>
