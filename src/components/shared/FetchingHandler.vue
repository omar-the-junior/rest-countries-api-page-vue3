<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'

defineProps<{
  isFetching: boolean
  error: string | null
}>()
</script>

<template>
  <div v-if="isFetching || error" class="flex h-full w-full items-center justify-center">
    <div v-if="isFetching">
      <Icon icon="line-md:loading-loop" class="size-16" />
    </div>
    <div v-else-if="error" class="text-white">{{ error }}</div>
  </div>
</template>
