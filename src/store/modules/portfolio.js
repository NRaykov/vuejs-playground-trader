const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
  //These arguments are props from 'Oder'
  'BUY_STOCKS'(state,{stockId, quantity, stockPrice}) {
      /** Find Stock By ID **/
      const record = state.stocks.find(element => element.id == stockId);
      if (record) {
            record.quantity += quantity
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      state.funds -= stockPrice * quantity;
  },
  'SELL_STOCKS' (state, {stockId, quantity, stockPrice}) {
    /** Find Stock By ID **/
    const record = state.stocks.find(element => element.id == stockId);
    if(record.quantity > quantity) {
      record.quantity -= quantity
    } else {
        /** Remove record from the list **/
        record.quantity.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockProtfolio (state, getters) {
    return state.stocks.map( stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: record.price,
        name: record.name,
      }
    })
  },
  funds (state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
