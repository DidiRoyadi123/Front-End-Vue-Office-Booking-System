import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
    items: (state) => {
      return state.items
    },
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    }
  },
  actions: {
    loadItems ({ commit }) {
      axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => response.data)
          .then(items => {
              console.log(items);
          commit('SET_Items', items)
      })
  }
  },
  modules: {
  },
});
