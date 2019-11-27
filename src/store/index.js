import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {}
  },

  actions: {
    setUserProfile({ commit }, userData) {
      commit("setUserProfileToStore", userData);
    }
  },
  mutations: {
    setUserProfileToStore(state, userProfile) {
      state.userProfile = userProfile;
    }
  },
  //no need to create module as we only have one
  modules: {}
});
