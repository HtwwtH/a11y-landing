import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { products } from '@/bd/hamsters.js'
import { options } from '@/bd/options.js'

export function useModal() {
    const store = useStore()

    const modalVisible = computed(() => store.getters.modalVisible)
    const thankModalVisible = computed(() => store.getters.thankModalVisible)

    const showThankModal = async() => {
        store.commit('showThankModal')
    }

    return {
        modalVisible,
        thankModalVisible,
        showThankModal
    }
}

export function useProducts() {
    const chosenOption = ref(null)

    const setValue = (id) => {
        chosenOption.value = options[id];
    }

    const productsList = ref(products)

    const sortedproductsList = computed(() => {
        if (chosenOption.value && chosenOption.value.id === 0) {
        return productsList.value.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        }
        else if (chosenOption.value && chosenOption.value.id === 1) {
        return productsList.value.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
        }
        else if (chosenOption.value && chosenOption.value.id === 2) {
        return productsList.value.sort((a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))
        }
        return productsList.value;
    })

    return {
        options,
        chosenOption,
        sortedproductsList,
        setValue
    }
}