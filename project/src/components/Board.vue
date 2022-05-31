<template>
  <div>
    Board
    <div v-if="loading">Board is loading....</div>
    <div v-else>
      <pre>
        {{ board }}
      </pre>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'board'
    ])
  },
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
    ...mapActions([
      'FETCH_BOARD'
    ]),
    fetchData() {
      this.loading = true;
      this.FETCH_BOARD({ id: this.$route.params.bid }).then(() => this.loading = false)
      // setTimeout(() => {
      //   this.bid = this.$route.params.bid;
      //   this.loading = false;
      // }, 1000);
    },
  },
};
</script>