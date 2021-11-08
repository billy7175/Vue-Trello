import Vuex from "vuex";
import Vue from "vue";
// import * as api from "../api";
import state from "./state";
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  
});

const { token } = localStorage;
store.commit("LOGIN", token);
// test commit to closed branch

export default store;
