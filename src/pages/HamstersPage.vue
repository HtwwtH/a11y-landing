<template>
  <main id="main-content" class="content container">
    <section class="content__catalog">
      <h1 tabindex="0" class="h1">Товары для хомяков</h1>
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
      <h2 class="h1">Видео о хомяках</h2>
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

    <section id="tabs" class="content__tabs">
      <h2 class="h1">Подробнее о товарах для хомяков</h2>
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

  import { tabs } from '@/bd/hamsters.js'

  import { useModal, useProducts } from '@/hooks/usePage.js'

  const { modalVisible, thankModalVisible, showThankModal } = useModal()
  const { chosenOption, sortedproductsList, setValue } = useProducts()

</script>

<style lang="scss">
@import '@/assets/scss/page.scss'
</style>