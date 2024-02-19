<script setup lang="ts">
defineProps<{
  title: string
  image: {
    src: string
    alt: string
  }
  population: number
  region: string
  capital: Array<string>
  linkParam: string
  loading: 'eager' | 'lazy'
}>()
</script>

<template>
  <div class="flex-shrink overflow-hidden rounded-md bg-white shadow-md dark:bg-dark-blue">
    <RouterLink :to="{ name: 'countryDetails', params: { cca3: linkParam } }">
      <img
        :loading="loading"
        :src="image.src"
        :alt="image.alt"
        class="h-44 w-full object-cover sm:h-[140px]"
      />

      <div class="p-5">
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <ul class="mt-2">
          <li class="font-light">
            <span class="font-medium">Population:</span> {{ population.toLocaleString() }}
          </li>
          <li class="font-light"><span class="font-medium">Region:</span> {{ region }}</li>
          <li class="font-light">
            <span class="font-medium">Capital:</span>
            {{ capital.join(', ') }}
          </li>
        </ul>
      </div>
    </RouterLink>
  </div>
</template>
