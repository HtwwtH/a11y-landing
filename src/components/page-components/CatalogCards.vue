<template>
  <div>
    <ul
      class="catalog__cards"
    >
      <li
        v-for="(product, index) in products"
        class="catalog__card"
      >
        <article
          :key="index"
        >
          <div>
            <img
              aria-hidden="true"
              :src="product.image"
              :alt="product.imageAlt"
              height="250"
            >
          </div>

          <div class="card__details">
            <span
              tabindex="0"
              :id="`card-${index}-heading`"
              class="card__title"
            >
              {{ product.title }}
            </span>

            <div class="card__price">
              <div tabindex="0">
                <span
                  aria-hidden="true"
                  class="price"
                >{{ product.price }}$</span>
                <span class="visually-hidden">Цена товара {{ product.price }} $ </span>

                <span
                  aria-hidden="true"
                  v-if="product.oldPrice"
                  class="old-price"
                >
                  {{ product.oldPrice }}$
                </span>
                <span
                  v-if="product.oldPrice"
                  class="visually-hidden"
                >
                  Старая цена {{ product.oldPrice }} $
                </span>
              </div>
            </div>

            <button
              ref="btn"
              :aria-label="`Купить ${product.title}`"
              type="button"
              class="card__button button button--black"
              @click="setModal(product.title, index)"
            >
              Купить
            </button>
          </div>
        
        </article>
      </li>
    </ul>
    <Teleport to="#modal">
      <app-modal v-if="modalVisible" />
    </Teleport>
    <Teleport to="#modal">
      <thank-modal v-if="thankModalVisible" @close-thank="focusBtn(activeProductId)" />
    </Teleport>
  </div>
</template>

<script>
import AppModal from '@/components/layout/AppModal.vue'
import ThankModal from '@/components/layout/ThankModal.vue'
import vClickOutside from 'click-outside-vue3'

import { ref } from 'vue'
import { useStore } from 'vuex'

import { useModal } from '@/hooks/usePage.js'

export default {
  name: 'CatalogCards',

  directives: {
    clickOutside: vClickOutside.directive
  },

  components: {
    AppModal,
    ThankModal
  },

  props: {
    products: {
        type: Object,
        default: () => {}
      }
  },

  setup (props) {
    const store = useStore()
    const products = props.products

    const { modalVisible, thankModalVisible } = useModal()

    const setModalTitle = (title) => store.commit('setModalTitle', title)
    const showModal = (status) => store.commit('showModal', status)

    const setModal = (title, index) => {
      console.log('setModal ', title)
      setModalTitle(title)
      showModal(true)
      activeProductId.value = index
    }

    const btn = ref(null)

    const focusBtn = (index) => {
      console.log(btn)
      btn.value[index].focus()
    }

    const activeProductId = ref(0)

    return {
      setModal,
      focusBtn,
      activeProductId,
      btn,
      modalVisible,
      thankModalVisible,
      products
    }
  }
}
</script>

<style scoped lang="scss">
  .catalog {
    &__cards {
      display: flex;
      flex-wrap: wrap;
    }

    &__card {
      width: calc(33.333% - 24px);
      margin: 16px 12px;

      border: 1px solid $black;
      border-radius: 5px;

      box-sizing: border-box;

      img {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
      }
    }
  }

  .card {
    &__details {
      height: 244px;
      padding: 17px 24px 24px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      box-sizing: border-box;
    }

    &__title {
      font-size: 32px;
      line-height: 39px;
    }

    &__price {
      display: flex;
      align-items: center;
      .price {
        color: $red;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
      }

      .old-price {
        margin-left: 12px;

        color: $mediumGray;
        font-size: 24px;
        line-height: 29px;
        text-decoration: line-through;
      }
    }
  }
</style>
