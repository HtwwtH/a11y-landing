import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { options } from '@/bd/options.js'

export function useModal() {
    const store = useStore()

    const modalVisible = computed(() => store.getters.modalVisible)
    const thankModalVisible = computed(() => store.getters.thankModalVisible)
    const thankSubscribeVisible = computed(() => store.getters.thankSubscribeVisible)

    return {
        modalVisible,
        thankModalVisible,
        thankSubscribeVisible
    }
}

export function useProducts(products) {
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
        else if (chosenOption.value && chosenOption.value.id === 3) {
            return productsList.value.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
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