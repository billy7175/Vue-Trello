<template>
  <div>
    Board
    <div v-if="loading">Board is loading....</div>
    <div v-else>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      bid: 0,
    };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true,
    },
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.bid = this.$route.params.bid;
        this.loading = false;
      }, 1000);
    },
  },
};
</script>