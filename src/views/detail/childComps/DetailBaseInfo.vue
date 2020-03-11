<template>
  <div v-if="Object.keys(goods).length !== 0" class="data-base-info">
    <!--商品title-->
    <div class="data-base-title">
      {{goods.title}}
    </div>
    <!--商品价格-->
    <div class="data-base-price">
      <span class="left">{{goods.newPrice}}</span>
      <span class="center">{{goods.oldPrice}}</span>
      <span class="right">{{goods.discount}}</span>
    </div>
    <!--商品销量信息-->
    <div class="data-base-sale">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    <!--商品运单信息-->
    <div class="data-base-car">
      <div class="data-base-car-item">
        <img :src="goods.services[0].icon" alt="">
        {{goods.services[0].name}}
      </div>
      <div class="data-base-car-item">
        <img :src="goods.services[1].icon" alt="">
        {{goods.services[1].name}}
      </div>
      <div class="data-base-car-item">
        <img :src="goods.services[2].icon" alt="">
        {{goods.services[2].name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.data-base-title{
  color: #222;
  margin-top: 10px;
}
.data-base-price{
  text-align: center;
  margin-top: 15px;
  width: 60%;
}
.data-base-price .left{
  font-size: 23px;
  color: deeppink;
  margin-left: 10px;
}
.data-base-price .center{
  text-decoration: line-through;
  font-size: 13px;
  margin-left: -15px;
  position: relative;
  top: 7px;
}
.data-base-price .right{
  padding: 1px 2px;
  color: #fff;
  background-color: deeppink;
  border-radius: 8px;
  font-size: 6px;
  margin-left: -15px;
  position: relative;
  top: -2px;
} 
.data-base-sale{
  margin-top: 20px;
  line-height: 30px;
  text-align: center;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.data-base-sale span{
  flex: 1;
}
.data-base-car{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.data-base-car-item{
  font-size: 10px;
}
.data-base-car-item img{
  width: 10px;
  height: 10px;
}
</style>