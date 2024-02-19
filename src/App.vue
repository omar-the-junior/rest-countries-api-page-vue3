<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useThemeStore } from './stores/theme'
import { watch } from 'vue'
import { switchDocumentThemeClass } from '@/utils/shared'

const route = useRoute()
const themeStore = useThemeStore()

watch(() => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeStore.switchThemeTo('dark')
    switchDocumentThemeClass('dark')
  }

  return themeStore.currentTheme
}, switchDocumentThemeClass)
</script>

<template>
  <NavBar />
  <RouterView v-slot="{ Component }">
    <Transition
      name="slide"
      mode="out-in"
      enter-active-class="duration-300 ease-out transition-all"
      enter-from-class="transform translate-x-[20%] opacity-0"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="duration-300 ease-in transition-all"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="transform -translate-x-[20%] opacity-0"
    >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
