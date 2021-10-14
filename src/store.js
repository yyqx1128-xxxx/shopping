import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
  state: {
    homeScrolltTop:0,
    detailScrolltTop:0,
    month:null
  },
  mutations: {
    setState(state, data) {
			for (let i = 0; i < data.length; i++) {
				state[data[i].name] = data[i].value;
				// console.log(data[i].name,data[i].value)
			}
		},
    commitMonth(state,month) {
      state.month = month
    }
  },
  actions: {

  }
})
