<template>
  <div>
    Board
    <p>bid : {{ bid }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0,
    };
  },
  created() {
    this.bid = this.$route.params.bid;
    console.log(this.bid);
  },
};
</script>