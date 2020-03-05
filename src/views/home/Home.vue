<template>
  <div id="home">
    <nav-bar class="homenavbar"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {getHomeMultidata} from 'network/home'
  import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
.homenavbar{
  background: #ff8198;
  color: #fff;
}
</style>