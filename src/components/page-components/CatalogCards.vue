<template>
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
            :aria-label="`Купить ${product.title}`"
            type="button"
            class="card__button button button--black"
            @click="setModal(product.title)"
          >
            Купить
          </button>
        </div>
      
      </article>
    </li>
  </ul>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

import { useStore } from 'vuex'

export default {
  name: 'CatalogCards',

  directives: {
    clickOutside: vClickOutside.directive
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

    const setModalTitle = (title) => store.commit('setModalTitle', title)
    const showModal = (status) => store.commit('showModal', status)

    const setModal = (title) => {
      console.log('setModal ', title)
      setModalTitle(title)
      showModal(true)
    }

    return {
      setModal,
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
