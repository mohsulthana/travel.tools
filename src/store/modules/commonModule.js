const commonModule = {
  namespaced: true,
  state: {
    layout: 'NoLayout',
  },
  mutations: {
    updateLayout(state, layout) {
      state.layout = layout;
    },
  },
  actions: {
    updateLayout({ commit }, layout) {
      commit('updateLayout', layout);
    },
  },
};

export default commonModule;
