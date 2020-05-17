<template>
  <div id="home">
    <nav-bar class="homenavbar"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl1"
                  class="tab-control"
                  v-show="isTabFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-loda="true"
            @pullingUp="loadMore"> 
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from 'views/home/childComps/RecommendView'
  import FeatureView from 'views/home/childComps/FeatureView' 

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from 'network/home.js'
  import {debounce} from 'common/utils.js'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed: {
      showGoods() {
        //利用计算属性  来进行一些提取
        return this.goods[this.currentType].list
      }
    },
    mounted() {
      //图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh, 1000)
      this.$bus.$on('itemImgLoad', () => {
        refresh()
      })
    },
    activited() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivited() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      
      tabClick(index) {
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        //判断backtop是否显示
        this.isShowBackTop = (-position.y) > 1000
        //决定tabcontrol是否吸顶(position:fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
      
      getHomeGoods(type) {
        //用来记录数据到了第几页
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          //将一个数组的数据放入到另外一个数组中(当然也可以for循环)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
#home{
  padding-top: 46px; 
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.homenavbar{
  background: #ff8198;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; 
} 

.content{
  position: absolute;
  top: 46px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}

</style>