<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <app-header />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: 'Inter', sans-serif;
  color: $black;
}
</style>
