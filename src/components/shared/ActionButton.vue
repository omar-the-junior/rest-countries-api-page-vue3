<script setup lang="ts">
defineProps<{
  icon?: string
}>()

import { Icon } from '@iconify/vue'
</script>
<template>
  <button class="flex items-center gap-3 bg-white font-bold dark:bg-dark-blue" type="button">
    <Icon v-if="icon" :icon="icon" class="size-[18px]" />
    <slot>no text provided</slot>
  </button>
</template>
