<template>
  <div class="cart">
    <!--导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品的列表-->
    <cart-list></cart-list>
    <!--底部的汇总-->
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'

  import {mapGetters} from 'vuex'
  
  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    text-align: center;
    background: #ff8198;
    color: #fff;
  }
</style>