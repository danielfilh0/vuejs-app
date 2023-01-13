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
    UPDATE_USER(state, user) {
      state.user = { ...state.user, ...user };
    },
    UPDATE_USER_EMAIL(state, email) {
      if (email) state.user = { ...state.user, email };
    },
    SET_IS_LOADING(state, status) {
      state.isLoading = status;
    },
  },
});
