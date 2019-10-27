<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import HomePage from './components/HomePage';

  export default {
    name: 'app',
    components: {
      HomePage,
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #eeeeeb;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
