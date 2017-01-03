<template>
  <div id="top-bar" class="columns is-mobile is-gapless">

    <div id="nav-buttons-wrapper" class="column is-narrow">
      <button class="button is-white"
              @click="back">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="button is-white"
              @click="forward">
        <i class="fa fa-chevron-right"></i>
      </button>
      <button class="button is-white"
              @click="reload">
        <i class="fa fa-refresh"></i>
      </button>
    </div>

    <div class="column">
      <span id="url-bar-wrapper" class="control has-addons">
        <input class="input is-expanded" name="" type="text" value=""
               @keyup.enter="go" />
        <button class="button"
                @click="go">
          <i class="fa fa-arrow-right"></i>
        </button>
      </span>
    </div>

    <div class="column is-narrow">
      <button class="button is-white"
              @click="settings">
        <i class="fa fa-cog"></i>
      </button>
    </div>
  </div>



</template>

<script>
 export default {
   methods: {
     back() {
       /*eslint no-console: 0 */
       console.log(">> clicked back");
     },
     forward() {
       /*eslint no-console: 0 */
       console.log(">> clicked forward");
     },
     reload() {
       /*eslint no-console: 0 */
       console.log(">> clicked reload");
     },
     go() {
       /*eslint no-console: 0 */
       console.log(">> clicked go");
     },
     settings() {
       /*eslint no-console: 0 */
       console.log(">> clicked settings");
     }
   }
 }
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
