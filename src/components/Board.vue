<template>
  <div>Board
    <div>{{bid}}</div>
    <router-link :to="`/board/${bid}/card/1`">Card1</router-link>
    <router-link :to="`/board/${bid}/card/2`">Card2</router-link>
    <hr>
    <router-view></router-view>
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