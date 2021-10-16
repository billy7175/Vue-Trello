<template>
  <div>
    <div>Board : board-id = {{ bid }}</div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <router-link :to="`/board/${bid}/card/1`">Card1</router-link>
      <router-link :to="`/board/${bid}/card/2`">Card2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Board",
  data() {
    return {
      loading: false,
      bid: 0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.bid = this.$route.params.bid;
        this.loading = false
      }, 1000);
      
    },
  },
};
</script>