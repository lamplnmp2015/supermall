import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js';
Vue.use(Vuex)
Vue.config.productionTip = false;
const store = new Vuex.Store({
  state:{
    cartInfo:[],
    isAllChecked:true
  },
  mutations,
  getters,
  actions,
  modules:{
    
  }
})
export default store