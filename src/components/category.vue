<template>
  <div class="category">
    <div class="category-left">
      <van-badge-group :active="active" @change="changeCategory">
        <van-badge v-for="(item,index) in categorylist" :key="index" :title="item.name" />
      </van-badge-group>
    </div>
    <div class="category-right">
      分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一分类一
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      categorylist: []
    };
  },
  onLoad() {
    var categorylist = [];
    categorylist.push({ id: 1, name: "分类一" })
    categorylist.push({ id: 2, name: "分类二" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 3, name: "分类三" })
    this.categorylist = categorylist;
  },
  methods: {
    changeCategory() {

    }
  }
};

</script>
<style>
.category-left,
.category-right {
  float: left;
}

.category-left {
  width: 20%;
}

.category-right {
  padding-left: 2%;
  padding-right: 2%;
  width: 76%;
  background: #fff;
}

</style>
