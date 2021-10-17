<template>
  <div>
    <div>Board : board-id = {{ bid }}</div>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li><router-link :to="`/b/${bid}/c/1`">Card1</router-link></li>
      <li><router-link :to="`/b/${bid}/c/2`">Card2</router-link></li>
    </ul>
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
      apiRes: ''
    }
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