import Vue from 'vue';
import Vuex from 'vuex';
import boards from './boards'

const namespacedModule = (currentModule) => {
   return {
     ...currentModule,
     namespaced: true,
   }
};

export default function () {
  Vue.use(Vuex);

  const storage = {
    modules: {
      boards: namespacedModule(boards),
    },
  };

  return new Vuex.Store(storage);
}

