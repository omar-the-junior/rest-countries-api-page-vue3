<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ placeholder: string }>()
const searchTerm = defineModel('searchTerm')
</script>
<template>
  <div
    class="dark:bg-dark-blue flex w-full max-w-[450px] items-center justify-center gap-4 rounded-md bg-white px-6 py-4 shadow-md"
  >
    <Icon icon="ion:search-sharp" class="w-6" />
    <input
      type="text"
      :placeholder="placeholder"
      v-model.trim.lazy="searchTerm"
      class="placeholder:text-dark-gray dark:bg-dark-blue w-full placeholder:font-light focus:outline-none dark:placeholder:text-white"
    />
  </div>
</template>
