import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import commonModule from '@/store/modules/commonModule';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage,
});

const store = new Vuex.Store({
  modules: {
    commonModule,
  },
  plugins: [vuexLocal.plugin],
});

export default store;
