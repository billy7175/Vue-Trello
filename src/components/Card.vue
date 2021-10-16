<template>
  <div>
    <h3></h3>
    {{ cid }}
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      cid: 0,
    };
  },
  watch:{
    '$route'(){
      // this.cid = newValue.params.cid
      this.cid = this.$route.params.cid
    }
  },
  created() {
    console.log("route =", this.$route);
    console.log("route card =", this.$route.params.cid);
    this.cid = this.$route.params.cid;
  },
  
};
</script>

<style scoped>
</style>