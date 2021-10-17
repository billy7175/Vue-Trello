<template>
  <div>
    <div>Board : board-id = {{ bid }}</div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      API result: {{apiRes}}
    </div>

    <ul>
      <li><router-link :to="`/board/${bid}/card/1`">Card1</router-link></li>
      <li><router-link :to="`/board/${bid}/card/2`">Card2</router-link></li>
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
      const req = new XMLHttpRequest()
      req.open('GET','http://localhost:3000/health');
      req.send()
      req.addEventListener('load', () => {
        this.loading = false
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response : JSON.parse(req.response)
        }
      })
      setTimeout(() => {
        this.bid = this.$route.params.bid;
        this.loading = false
      }, 1000);
      
    },
  },
};
</script>