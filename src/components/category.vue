<template>
  <div class="category">
    <div class="category-left">
      <van-badge-group :active="active" @change="changeCategory">
        <van-badge v-for="(item,index) in categorylist" :key="index" :id="item.id" :title="item.name" />
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
      categorylist: [],
      categoryid: 0,
    };
  },
  onLoad() {
    var categorylist = [];
    categorylist.push({ id: 1, name: "分类一" })
    categorylist.push({ id: 2, name: "分类二" })
    categorylist.push({ id: 3, name: "分类三" })
    categorylist.push({ id: 4, name: "分类四" })
    categorylist.push({ id: 5, name: "分类五" })
    categorylist.push({ id: 6, name: "分类六" })
    categorylist.push({ id: 7, name: "分类七" })
    categorylist.push({ id: 8, name: "分类八" })
    categorylist.push({ id: 9, name: "分类九" })
    categorylist.push({ id: 10, name: "分类十" })
    categorylist.push({ id: 11, name: "分类十一" })
    categorylist.push({ id: 12, name: "分类十二" })
    this.categorylist = categorylist;
    this.active = 0;
    this.getGoodsByCategory();
  },
  methods: {
    getGoodsByCategory() {
      var categoryid = this.categorylist[this.active]['id'];
      console.log(categoryid)
    },
    changeCategory(event) {
      this.active = event.mp.detail;
      this.getGoodsByCategory();
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
