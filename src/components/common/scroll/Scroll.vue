<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return { 
        scroll: null
      }
    },
    mounted() {
      //创建better-scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,//使得其里面包含的组件点击事件可以点击
        probeType: this.probeType, //监听鼠标滚动
        pullUpLoad: this.pullUpLoad //上拉加载更多
      })

      //监听鼠标滚动的区域
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', (position) =>  {
        this.$emit('scroll', position)
      })
      this.scroll.refresh()
      }

    //监听上拉加载更多事件
    if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
    },
    methods: {
      scrollTo(x, y, time){
        this.scroll && this.scroll.scrollTo(x, y, time=500)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>