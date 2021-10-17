<template>
  <div>
    <h1>Home</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="b in boards" :key="b.id">
        {{ b }}
      </div>
    </div>
    <section>
      <h2>Board List</h2>
      <ul>
        <li>
          <router-link to="/board/1">Board1</router-link>
        </li>
        <li>
          <router-link to="/board/2">Board2</router-link>
        </li>
        <li>
          <router-link to="/board/3">Board3</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
import { board } from "../api";

export default {
  data() {
    return {
      loading: false,
      boards: [],
      error: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      board.fetch()
        .then((data) => {
          this.boards = data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
</style>