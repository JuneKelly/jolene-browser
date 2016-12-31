<style scoped>
</style>

<template>
  <div>
    <top-bar></top-bar>
    <h1>Welcome.</h1>
    <!-- <current-page></current-page> -->
    <!-- <versions></versions> -->
    <!-- <links></links> -->
  </div>
</template>

<script>
 /* import CurrentPage from './LandingPageView/CurrentPage';
  * import Links from './LandingPageView/Links';
  * import Versions from './LandingPageView/Versions';
  */
  import TopBar from './TopBar.vue'
  export default {
    components: {
      TopBar
      /* CurrentPage,*/
      /* Links,*/
      /* Versions*/
    },
    name: 'landing-page'
  };
</script>
