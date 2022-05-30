<template>
  <div>
    Board List
    <div v-if="loading">loading...</div>
    <div v-else>
      <pre>{{ boards }}</pre>
    </div>
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <ul>
      <router-link to="/b/1">b1</router-link>
      <router-link to="/b/2">b2</router-link>
      <router-link to="/b/3">b3</router-link>
    </ul>
  </div>
</template>

<script>
import { board } from "@/api";
export default {
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      board
        .fetch()
        .then((res) => {
          console.log('#boards', res)
          this.boards = res.list;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  data() {
    return {
      loading: false,
      boards: [],
      error: "",
    };
  },
};
</script>

<style>
</style>
