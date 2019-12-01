import Vue from "vue";
import Vuex from "vuex";
import { fetchGithubUser } from "@/service/user.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {}
  },

  actions: {
    getUserProfile({ commit }, userName, config = {}) {
      fetchGithubUser(userName, config)
        .then(response => {
          commit("setUserProfileToStore", response);
        })
        .catch(error => {
          return error;
        });
    },
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
