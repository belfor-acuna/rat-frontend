<template>
  <navbar/>
    <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components:{
    Navbar,}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url(../src/assets/background2.png);
 background-size: cover;
}
</style>
