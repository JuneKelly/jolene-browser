import * as R from 'ramda';
import * as types from '../mutation-types.js';


const state = {
  tabs: [],
  currentTab: null
};


const getters = {
  tabCount(state) {
    return state.tabs.length;
  },
  tabAtIndex(state, index) {
    return state.tabs[index];
  },
  currentTab(state) {
    if (state.currentTab !== null) {
      return this.tabAtIndex(state, state.currentTab);
    } else {
      return null;
    }
  }
};


const mutations = {
  [types.PUSH_NEW_TAB](state, {tab}) {
    state.tabs.push(tab);
    if (state.tabs.length > 0) {
      state.currentTab = state.tabs.length-1;
    } else {
      state.currentTab = null;
    }
  },
  [types.REMOVE_TAB_AT_INDEX](state, {tabIndex}) {
    state.tabs = R.remove(tabIndex, 1, state.tabs);
    if (state.tabs.length > 0) {
      state.currentTab = state.tabs.length-1;
    } else {
      state.currentTab = null;
    }
  }
};


const actions = {
  closeTab({ commit }, payload) {
    // todo
    commit(types.REMOVE_TAB_AT_INDEX, payload);
  },
  newTab({ commit }, payload) {
    commit(types.PUSH_NEW_TAB, payload);
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
