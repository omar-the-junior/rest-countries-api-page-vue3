<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'
const themeStore = useThemeStore()

const moonIcon = computed(() =>
  themeStore.currentTheme === 'dark' ? 'ion:moon-sharp' : 'ion:moon-outline'
)
</script>

<template>
  <nav
    class="fixed left-0 top-0 z-50 flex w-screen justify-between bg-white px-5 py-6 shadow-md dark:bg-dark-blue lg:px-20"
  >
    <RouterLink class="font-black md:text-xl lg:text-2xl" to="/">Where in the world</RouterLink>

    <ActionButton class="text-sm md:text-lg" :icon="moonIcon" @click="themeStore.toggleTheme"
      >Dark Mode</ActionButton
    >
  </nav>
</template>
