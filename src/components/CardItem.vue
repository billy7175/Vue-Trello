<template>
  <div class="card-item">
    <router-link :to="`/b/${boardId}/c/${data.id}`">
      <div>{{ data.title }}</div>
      <div class="card-item-meta" v-if="data.description">&equiv;</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["data"],
  computed: {
    ...mapState({
      boardId: (state) => state.board.id,
    }),
  },
};
</script>

<style scoped>
.card-item {
  border: 1px solid red;
}
</style>