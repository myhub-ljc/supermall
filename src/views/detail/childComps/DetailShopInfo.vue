<template>
  <div class="detail-shop-info">
    <div class="shop-head">
      <img :src="shop.logo" alt="">
      <div class="shop-title">{{shop.name}}</div>
    </div>
    <div class="shop-middle">
          <div class="shop-middle-item">
            <div class="aa">{{shop.sells}}</div>
            <div>总销量</div>
          </div>
          <div class="shop-middle-item">
            <div class="aa">{{shop.fans}}</div>
            <div>全部宝贝</div>
          </div>
          <div class="bb"></div>
        <div class="shop-middle-item">
          <div class="shop-middle-right">
            <span>{{shop.score[0].name}}</span>
            <span>{{shop.score[0].score}}</span>
          </div>
          <div class="shop-middle-right">
            <span>{{shop.score[1].name}}</span>
            <span>{{shop.score[1].score}}</span>
          </div>
          <div class="shop-middle-right">
            <span>{{shop.score[2].name}}</span>
            <span>{{shop.score[2].score}}</span>
          </div>
        </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
    <div>wo </div>
    <div>wo </div>
    <div>wo </div>
    <div>wo </div>
    <div>wo </div>
    <div>wo </div>
    <div>wo </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-info{
  margin-top: 10px;
}
.shop-head{
  display: flex;
}
.shop-head img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 10px;
}
.shop-head .shop-title{
  margin-top: 30px;
}

.shop-middle{
  display: flex;
  height: 60px;
  margin-top: 10px;
  justify-content: space-evenly;
  font-size: 12px;
}
.bb{
  border-right: 1px solid deeppink;
}
.shop-middle-right{
 margin-bottom: 10px;
}
.shop-middle-right span{
  margin: 0 10px;
}
.aa{
  margin: 10px 0px;
}

.shop-bottom{
  margin-top:10px;
  text-align: center;
}
.enter-shop{
  width: 160px;
  height: 30px;
  line-height: 30px;
  color: white;
  display: inline-block;
  background-color: deeppink;
  text-align: center;
}
</style>