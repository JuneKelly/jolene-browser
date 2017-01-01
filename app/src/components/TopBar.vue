<template>
  <div id="top-bar" class="columns is-mobile is-gapless">

    <div class="column is-narrow">
      <button class="button is-white">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="button is-white">
        <i class="fa fa-arrow-right"></i>
      </button>
      <button class="button is-white">
        <i class="fa fa-refresh"></i>
      </button>
    </div>

    <div class="column">
      <span id="url-bar-wrapper" class="control">
        <input class="input" name="" type="text" value=""/>
      </span>
    </div>

    <div class="column is-narrow">
      <button class="button is-white">
        <i class="fa fa-cog"></i>
      </button>
    </div>
  </div>



</template>

<script>
 export default {}
</script>

<style scoped>
 #top-bar {
   padding: 8px;
   padding-left: 4px;
   padding-right: 4px;
   border-bottom: 1px solid #ddd;
 }
</style>
