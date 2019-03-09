import Vuex from 'vuex'

const store = {
  state: {
    routeList: []
  },
  mutations: {
    routeChange(state, route) {
      state.routeList.push(route)
      console.log('store')
    }
  }
}

export default store
