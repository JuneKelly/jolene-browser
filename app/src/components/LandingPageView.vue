<style scoped>
</style>

<template>
  <div>
    <top-bar></top-bar>
    <page-display></page-display>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue'
  import PageDisplay from './PageDisplay.vue'
  export default {
    components: {
      TopBar,
      PageDisplay
    },
    name: 'landing-page'
  };
</script>
