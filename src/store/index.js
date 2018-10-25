import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      manga: {}
    },
    mutations: {
      setManga (state, data) {
        state.manga = data
      }
    }
  })
}

export default createStore