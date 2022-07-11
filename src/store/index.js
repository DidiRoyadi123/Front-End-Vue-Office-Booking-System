import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
  users:[],
  },
  getters: {
  
  },
  mutations: {
   getUser(state,payload){
    state.users = payload
   },
  },
  actions: {
   fetchUsers (store){
    axios
    .get('https://officebooking-app-pn6n3.ondigitalocean.app/admin/users')
    .then(response => {
      console.log(response.data)
      store.commit('getUser', response.data);
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
   }

  },
  modules: {
  },
});
