<template>
  <div>
    Card
    <div v-if="loading">Loading Card...</div>
    <div v-else>{{cid}}</div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      loading: false,
      cid: 0,
    };
  },
  watch:{
    '$route': {
      immediate:true,
      handler: 'fetchData'
    }
  },
  created() {
    
  },
  methods:{
    fetchData(){
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      },1000)
    }
  }
  
};
</script>

<style scoped>
</style>