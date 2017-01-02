<template>
  <div id="page" class="">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2 content">

        <iframe frameborder="0"
                name="renderedPage"
                :srcdoc="defaultPage"
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
      }
    }
  }
</script>

<style scoped>
 iframe {
   width: 100%;
   height: 100%;
   min-height: 600px;
   overflow: scroll;
 }
</style>
