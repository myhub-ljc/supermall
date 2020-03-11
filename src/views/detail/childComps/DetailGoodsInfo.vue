<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
    <div class="left-div"></div>
    <div class="center-div">{{detailInfo.desc}}</div>
    <div class="right-div"></div>
    <div class="detail-goods-title">{{detailInfo.detailImage[0].key}}</div>
    <div class="detail-goods-image">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" :key="index" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-goods-info{
  margin-top: 20px;
}
.left-div{
  border-top: 1px solid deeppink;
  width: 40%;
}
.center-div{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
}
.right-div{
  border-bottom: 1px solid deeppink;
  width: 40%;
  margin-left: 60%;
}
.detail-goods-title{
  font-weight: bold;
  margin-top: 15px;
}
.detail-goods-image img{
  width: 100%;
}
</style>