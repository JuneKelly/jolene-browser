const defaultPageSrc = `
# Jolene

![jolene](static/Jolene_logo_head.png)

Welcome to Jolene, the markdown browser.
`.trim();

const defaultPageStyle = `
<style>
  body{font-family:sans-serif;}
</style>
`.trim();


const state = {
  defaultPageSrc,
  defaultPageStyle
};


const getters = {
  defaultPageSrc(state) {
    return state.defaultPageSrc;
  },
  defaultPageStyle(state) {
    return state.defaultPageStyle;
  }
};


export default {
  state,
  getters
};
