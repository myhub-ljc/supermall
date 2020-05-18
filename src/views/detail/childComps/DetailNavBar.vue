<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
             :key="item" 
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="detailClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    detailClick(index) {
      this.currentIndex = index
      this.$emit('detailClick', index)
    },
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.title{
  display: flex;
  text-align: center;
  font-size: 13px;
}
.title-item{
  flex: 1;
}
.active{
  color: #ff8198;
}
.back{
  margin-left: 10px;
}
.back img{
  margin-top: 10px;
}
</style>