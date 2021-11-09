<template>
  <div>
    <div>Board : board-id = {{ bid }}</div>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <div>bid:{{ bid }}</div>
      <pre>{{ board }}</pre>
      <li><router-link :to="`/b/${bid}/c/1`">Card1</router-link></li>
      <li><router-link :to="`/b/${bid}/c/2`">Card2</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Board",
  data() {
    return {
      loading: false,
      bid: 0,
      apiRes: "",
    };
  },
  computed: {
    ...mapState({
      board: "board",
    }),
  },
  created() {
    this.bid = this.$route.params.bid
    this.fetchData();
  },
  methods: {
    ...mapActions(["FETCH_BOARD"]),
    fetchData() {
      this.loading = true;
      this.FETCH_BOARD({ id: this.$route.params.bid })
      .then(() => this.loading = false)

    },
  },
};
</script>