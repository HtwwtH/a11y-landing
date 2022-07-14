<template>
  <main id="main-content" class="content container">
    <section class="content__catalog">
      <h1 tabindex="0" class="h1">Товары для морских свинок</h1>
      <catalog-sorting
        :chosen-option="chosenOption"
        label="Сортировать по:"
        placeholder="Нет сортировки"
        :options="options"
        @set-value="setValue"
      />
      <catalog-cards :products="sortedproductsList" />
    </section>

    <section class="content__video">
      <a class="skip-link" href="#tabs" title="К следующему разделу">Пропустить</a>
      <h2 class="h1">Видео о морских свинках</h2>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l_xYyfNb-lI"
          title="YouTube video player, видео про морских свинок"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </section>

    <section id="tabs" class="content__tabs">
      <h2 class="h1">Подробнее о товарах для морских свинок</h2>
      <content-tabs :tabs="tabs" />
    </section>

    <app-modal v-if="modalVisible" @showThankModal="showThankModal" />
    <thank-modal v-if="thankModalVisible" />
  </main>
</template>

<script setup>
  import CatalogSorting from '@/components/page-components/CatalogSorting.vue'
  import CatalogCards from '@/components/page-components/CatalogCards.vue'
  import ContentTabs from '@/components/page-components/ContentTabs.vue'
  import AppModal from '@/components/layout/AppModal.vue'
  import ThankModal from '@/components/layout/ThankModal.vue'

  import { ref, computed, nextTick } from 'vue'
  import { useStore } from 'vuex'

  import { products, tabs } from '@/bd/guinea-pigs.js'

  const options = [
    {
      id: 0,
      value: 'По возрастанию цены',
    },
    {
      id: 1,
      value: 'По убыванию цены',
    },
    {
      id: 2,
      value: 'По популярности',
    },
    {
      id: 3,
      value: 'Нет сортировки',
    },
  ]

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

  const store = useStore()

  const modalVisible = computed(() => store.getters.modalVisible)
  const thankModalVisible = computed(() => store.getters.thankModalVisible)

  const showThankModal = async() => {
    console.log('showThankModal')
    await nextTick()
    store.commit('showThankModal')
  }
</script>

<style lang="scss">
  .h1 {
      margin-top: 12px;
      margin-bottom: 24px;
  }

  .content {
    &__video {
      position: relative;
      margin-top: 125px;

      .skip-link {
        top: 0;
        left: -600px;
        transition: left 0.3s ease;

        &:focus {
          left: 0;
        }
      }

      .video {
        display: flex;
        justify-content: center;
        margin-top: 34px;
      }
    }

    &__tabs {
      margin-top: 125px;

      .h2 {
        margin-bottom: 54px;
      }
    }
  }
</style>