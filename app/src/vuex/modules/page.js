import * as types from '../mutation-types.js';


const state = {
  currentPage: null,
  history: []
};


const getters = {
  currentPage() {

  }
};

const mutations = {
  [types.PUSH_NEW_PAGE](state, page) {
    history.push(page);
    currentPage = history.length-1;
  },
  [types.BACK_PAGE](state) {
    if (currentPage > 0) {
      state.currentPage--;
    }
  },
  [types.FORWARD_PAGE](state) {
    if (statecurrentPage < history.length-1) {
      state.currentPage++;
    }
  }
};


export default {
  state
};
