<template>
  <div id="page" class="container">
    <div class="columns is-mobile">
      <div id="page-wrapper" class="column is-8 is-offset-2 content">

        <iframe frameborder="0"
                name="renderedPage"
                :srcdoc="currentTabSrc"
                sandbox>
        </iframe>

      </div>
    </div>
  </div>
</template>

<script>
  import * as Parser from '../parser.js';
  export default {
    computed: {
      defaultPage() {
        return this.$store.getters.defaultPageStyle
        + Parser.parsePage(this.$store.getters.defaultPageSrc);
      },
      currentTabSrc() {
        const currentTab = this.$store.getters.currentTab;
        if (currentTab) {
          return this.$store.getters.defaultPageStyle
           + Parser.parsePage(currentTab.markdownSrc);
        } else {
          /*eslint no-console:0*/
          console.log(">> no tab, default");
          return this.defaultPage;
        }
      }
    }
  }
</script>

<style scoped>
 page-wrapper {
   height: 100%;
   overflow: scroll;
 }
 iframe {
   width: 100%;
   height: 100%;
   min-height: 600px;
 }
</style>
