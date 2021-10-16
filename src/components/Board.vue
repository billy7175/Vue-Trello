<template>
  <div>Board
    {{bid}}
  </div>
</template>
<script>
export default {
  name:'Board',
  data(){
    return {
      bid: 0
    }
  },
  created(){
    console.log(this.$route)
    console.log(this.$route.params.bid)
    this.bid = this.$route.params.bid
  }
}
</script>