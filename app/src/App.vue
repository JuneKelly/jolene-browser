<style>
 html,body {
   background-color: white;
   font-size: 1em;
 }
</style>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store';

  export default {
    store
  };
</script>
