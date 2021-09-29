<template>
  <div id="app">
    <router-view />
    <!-- <home /> -->
  </div>
</template>

<script>
// import home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    // home,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  overflow-y: auto !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
