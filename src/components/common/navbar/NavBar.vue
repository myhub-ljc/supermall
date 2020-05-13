<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.navbar{
  display: flex;
  line-height: 46px;
}
.left, .right{
  width: 30px;
}
.center{
  flex: 1;
}
</style>