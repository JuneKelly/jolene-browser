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
};
