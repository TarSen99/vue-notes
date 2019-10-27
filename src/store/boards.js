const defaultState = () => {
  return {
    boards: [],
    boardItems: [],
    id: null,
  };
};


const mutations = {
  updateBoards(state, boards) {
    state.boards = boards;
  },
  updateBoardItems(state, boardItems) {
    state.boardItems = boardItems;
  },
  setId(state, id) {
    state.id = id;
  }
};

const actions = {
  addNewBoard( { commit, state }, name) {
    return this._vm.$api.addNewBoard(name)
      .then(res => {
        commit('updateBoards', res);
      });
  },
  getBoardsList({commit, state}) {
    return this._vm.$api.getBoardsList()
      .then(res => {
        commit('updateBoards', res);
      });
  },
  addNewBoardItem({commit, state}, options) {
    return this._vm.$api.addNewBoardItem(options)
      .then(res => {
        commit('updateBoardItems', res);
      });
  },
  getBoardItemsList({commit, state}, id) {
    return this._vm.$api.getBoardItems(id)
      .then(res => {
        commit('updateBoardItems', res);
      });
  },
};

const getters = {

};

export default {
  mutations,
  actions,
  getters,
  state: defaultState(),
}
