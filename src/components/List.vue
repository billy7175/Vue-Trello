<template>
  <div class="list">
    <div class="list-header">
      <div class="list-header-title">
        {{data.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'List',
  props:['data'],
}
</script>