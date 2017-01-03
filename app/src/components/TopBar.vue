<template>
  <div id="top-bar" class="columns is-mobile is-gapless">

    <div id="nav-buttons-wrapper" class="column is-narrow">
      <button class="button is-white">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="button is-white">
        <i class="fa fa-chevron-right"></i>
      </button>
      <button class="button is-white">
        <i class="fa fa-refresh"></i>
      </button>
    </div>

    <div class="column">
      <span id="url-bar-wrapper" class="control has-addons">
        <input class="input is-expanded" name="" type="text" value=""/>
        <button class="button">
          <i class="fa fa-arrow-right"></i>
        </button>
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
 #nav-buttons-wrapper {
   padding-right: 4px;
 }
 #url-bar-wrapper {
   padding-right: 4px;
 }
</style>
