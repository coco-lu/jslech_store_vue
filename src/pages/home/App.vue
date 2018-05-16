<template>
  <div id="app">
    <navTabs></navTabs>
    <router-view/>
  </div>
</template>

<script>
  //首页组
  import navTabs from '../../components/home/public/navTabs.vue' 
export default {
  name: 'App',
  components: {
    navTabs,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
