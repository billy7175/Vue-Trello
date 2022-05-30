<template>
  <div>
    Board List
    <div v-if="loading">loading...</div>
    <div v-else>
      <pre>{{ apiRes }}</pre>
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
        .get("http://localhost:3000/health")
        .then((res) => {
          this.apiRes = res.data;
        })
        .catch((res) => (this.error = res.response.data))
        .finally(() => {
          this.loading = false;
        });
    },
  },
  data() {
    return {
      loading: false,
      apiRes: "",
      error: "",
    };
  },
};
</script>

<style>
</style>
