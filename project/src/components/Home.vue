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
import axios from "axios";
export default {
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/boards")
        .then((res) => {
          this.boards = res.data;
        })
        .catch(() => {
          this.$router.replace('/login')
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
