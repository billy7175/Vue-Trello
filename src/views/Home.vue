<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <login-form></login-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm from '@/components/form/LoginForm'

export default {
  name: 'Home',
  components: {
    LoginForm
    // HelloWorld
  }
}
</script>
