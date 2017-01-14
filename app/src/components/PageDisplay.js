import * as Parser from '../parser.js';


export default {
  mounted() {
    /* eslint no-console:0 */
    const _navigateToPage = this.navigateToPage;
    const iframe = document.querySelector('iframe[name="renderedPage"]');
    let iDoc = iframe.contentWindow || iframe.contentDocument;
    setTimeout(() => {
      if (iDoc.document) {
        iDoc = iDoc.document;
        iDoc.addEventListener('click', function(e) {
          e.preventDefault();
          if (e.target.tagName === 'A') {
            _navigateToPage(e.target.href);
          }
        });
      }
    }, 0);
  },
  methods: {
    navigateToPage(href) {
      /*eslint no-console:0*/
      console.log(">> navigate to", href);
      console.log(href);
    }
  },
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
