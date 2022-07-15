<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <app-header />
  <router-view />
  <div id="modal"></div>
  <app-footer />
</template>

<style lang="scss">
#app {
  font-family: 'Inter', sans-serif;
  color: $black;
}
</style>
