<template>
  <div id="page" class="">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2 content">

        <iframe frameborder="0"
                name="renderedPage"
                :srcdoc="page"
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
     page() {
       return '<style>body{font-family:sans-serif;}</style>\n\n' + this.testPage;
     }
   },
   data: () => {
     return {
       testPage: Parser.parsePage('# Jolene\n\nTest')
     }
   }
 }
</script>

<style scoped>
 #page {
 }
</style>
