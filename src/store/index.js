import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      modalVisible: false,
      thankModalVisible: false,
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
    },

    showThankModal(state) {
      state.thankModalVisible = true
    },

    hideThankModal(state) {
      state.thankModalVisible = false
    },
  },
  getters: {
    modalVisible(state) {
        return state.modalVisible
    },

    thankModalVisible(state) {
        return state.thankModalVisible
    }
  }
})