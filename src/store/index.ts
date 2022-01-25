import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isCollapse: false,
      authenticator: true,
    };
  },

  mutations: {
    setIsCollapse(state: any) {
      state.isCollapse = !state.isCollapse;
    },
    setAuthenticator(state: any){
      state.authenticator = !state.authenticator
    }
  },
  actions: {},
});

export default store;
