<template>
  <div class="detail-bottom-bar">
    <div class="detail-bottom-bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="detail-bottom-bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar'
}
</script>

<style scoped>
.detail-bottom-bar{
  height: 49px;
  position: relative;
  display: flex;
  text-align: center;
}
.detail-bottom-bar-item{
  flex: 1;
  display: flex;
}
.bar-left{
  background-color: #fff;
}
.bar-left>div{
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
  margin-top: -2px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 2px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position:0 -54px;
}
.bar-left .shop {
  background-position:0 -98px;
}
.bar-right{
  display: flex;
  font-size: 15px;
  line-height: 49px;
  text-align: center;
}
.cart{
  flex: 1;
  background-color: #ffe817;
  color: #333;
}
.buy{
  flex: 1;
  background-color: #f69;
  color: #fff;
}
</style>