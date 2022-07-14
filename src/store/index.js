import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      modalVisible: false,
      modalTitle: '',
      thankModalVisible: false,
      thankSubscribeVisible: false,
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

    showThankSubscribe(state) {
      state.thankSubscribeVisible = true
    },

    hideThankSubscribe(state) {
      state.thankSubscribeVisible = false
    },
  },
  getters: {
    modalVisible(state) {
        return state.modalVisible
    },

    thankModalVisible(state) {
        return state.thankModalVisible
    },

    thankSubscribeVisible(state) {
        return state.thankSubscribeVisible
    }
  }
})