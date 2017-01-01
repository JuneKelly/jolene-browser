<style scoped>
</style>

<template>
  <div>
    <top-bar></top-bar>
    <page></page>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue'
  import Page from './Page.vue'
  export default {
    components: {
      TopBar,
      Page
    },
    name: 'landing-page'
  };
</script>
