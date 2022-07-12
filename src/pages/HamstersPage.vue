<template>
  <main id="main-content" class="content container">
    <section class="content__catalog">
      <h1 class="h1">Товары для хомяков</h1>
      <catalog-sorting
        :chosen-option="chosenOption"
        label="Сортировать по:"
        placeholder="Нет сортировки"
        :options="options"
        @set-value="setValue"
      />
      <catalog-cards :products="sortedProducts" />
    </section>

    <section class="content__video">
      <h2 class="h2">Видео о товарах для хомяков</h2>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JPXREWCtN3w"
          title="YouTube video player, видео про хомяков"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </section>

    <section class="content__tabs">
      <h2 class="h2">Подробнее о товарах для хомяков</h2>
      <content-tabs />
    </section>

    <app-modal />
  </main>
</template>

<script setup>
  import CatalogSorting from '@/components/page-components/CatalogSorting.vue'
  import CatalogCards from '@/components/page-components/CatalogCards.vue'
  import ContentTabs from '@/components/page-components/ContentTabs.vue'
  import AppModal from '@/components/layout/AppModal.vue'

  import { ref, computed } from 'vue'

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
    console.log('setValue')
    chosenOption.value = options[id];
  }

  const products = ref([
    {
      id: 0,
      title: 'Коврик для хомяка',
      image: 'src/assets/images/products/hamsters/carpet.jpg',
      imageAlt: 'Хомячок на мягком пушистом коврике',
      oldPrice: 200,
      price: 100,
      rating: 4,
    },
    {
      id: 1,
      title: 'Опилки для хомяка',
      image: 'src/assets/images/products/hamsters/opilki.jpg',
      imageAlt: 'Хомячок на опилках',
      oldPrice: 200,
      price: 100,
      rating: 5,
    },
    {
      id: 2,
      title: 'Тоннель для хомяка',
      image: 'src/assets/images/products/hamsters/tunnel.jpg',
      imageAlt: 'Хомячок в туннеле',
      price: 50,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Еда для хомячков',
      image: 'src/assets/images/products/hamsters/food.jpg',
      imageAlt: 'Зерна и сушеные овощи',
      price: 100,
      rating: 5,
    },
    {
      id: 4,
      title: 'Дом для хомяка',
      image: 'src/assets/images/products/hamsters/house.jpg',
      imageAlt: 'Желтый пластиковый дом для хомяка',
      oldPrice: 500,
      price: 400,
      rating: 3,
    },
  ])

  const sortedProducts = computed(() => {
    if (chosenOption.value && chosenOption.value.id === 0) {
      return products.value.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }
    else if (chosenOption.value && chosenOption.value.id === 1) {
      return products.value.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
    }
    else if (chosenOption.value && chosenOption.value.id === 2) {
      return products.value.sort((a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))
    }
    return products.value;
  })
</script>

<style lang="scss">
  .h1 {
      margin-top: 12px;
      margin-bottom: 24px;
  }

  .content {
    &__video {
      margin-top: 125px;

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