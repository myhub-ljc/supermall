<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="item.index" 
         :class="{active:index === currentIndex}"
         @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  } 
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  background: #fff;
}
.tab-control-item{
  flex: 1;
}
.active span{
  padding: 4px;
  border-bottom: 2px solid#ff5777;
}
.active{
  color: #ff5777;
}
</style>