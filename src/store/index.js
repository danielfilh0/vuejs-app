import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    isLoading: false,
  },
  getters: {
    photoURL: (state) => {
      if (state.user.photoURL) return state.user.photoURL;
      return "https://firebasestorage.googleapis.com/v0/b/vuejs-app-5326b.appspot.com/o/default-user.png?alt=media&token=d6f57ea2-135d-44ac-b3ce-36760e163c9e";
    },
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
