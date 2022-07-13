import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      modalVisible: false,
      modalTitle: '',
    }
  },
  mutations: {
    setModalTitle(state, title) {
      state.modalTitle = title
    },

    showModal (state, status) {
      state.modalVisible = status
    },

    hideModal(state) {
      state.modalVisible = false
      state.modalTitle = ''
    }
  },
  getters: {
    modalVisible(state) {
        return state.modalVisible
    }
  }
})