import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    isLoading: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_IS_LOADING(state, status) {
      state.isLoading = status;
    },
  },
});