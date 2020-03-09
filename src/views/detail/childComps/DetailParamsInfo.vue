<template>
  <div class="detail-params-info">
    <table class="detail-params-info-table" v-for="(item, index) in paramInfo.rule.table" :key="index">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table>
      <tr v-for="(item, index) in paramInfo.info.set" :key="index">
        <td class="table-key">{{paramInfo.info.set[index].key}}</td>
        <td class="table-value">{{paramInfo.info.set[index].value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-params-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
.detail-params-info table{
  width: 100%;
  border-collapse: collapse;
}
.detail-params-info table tr{
  height: 42px;
}
.detail-params-info table td{
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.table-key{
  text-align: center;
  width: 10%;
}
.table-value{
  text-align: center;
  color: deeppink;
}
</style>