const state = {
  tabs: []
};


const getters = {
  tabCount(state) {
    return state.tabs.length;
  },
  tabAtIndex(state, index) {
    return state.tabs[index];
  }
};


export default {
  state,
  getters
};
