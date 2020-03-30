import data_stocks from "../../data/data_stocks";

const state = {
  stocks: []
};
const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {
    //TODO Randomize
  }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit()
    },
    initStocks: ({commit}) => {
      commit('SET_STOCKS', data_stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
    state,
    mutations,
    actions,
    getters
}
