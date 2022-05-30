<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
export default {
  name: "App",
  components : {
    NavBar
  }
};
</script>

<style>
* {
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
