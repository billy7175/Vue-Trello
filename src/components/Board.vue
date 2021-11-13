<template>
  <div>
    <div class="board-wrapper">
      <div class="board">
        <div class="board-header">
          <span class="board-title">
            {{board.title}}</span>
        </div>
        <div class="list-section-wrapper">
          <div class="list-section">
            <div class="list-wrapper" v-for="list in board.lists" :key="list.id">
              <List :data="list" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import List from './List.vue'
export default {
  components: {
    List
  },
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

<style scoped>
.list-section {
  border:5px solid blue;
  display:flex;
}
</style>