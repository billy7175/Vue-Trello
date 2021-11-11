<template>
  <div class="card-item">
    <div>{{data.title}}</div>
    <div class="card-item-meta" v-if="data.description">&equiv;</div>
  </div>
</template>

<script>
export default {
  props:['data']
}
</script>

<style scoped>
.card-item {
  border:1px solid blue;
}
</style>