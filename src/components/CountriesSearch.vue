<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries'
import MultiSelectInput from './shared/MultiSelectInput.vue'
import SearchBar from './shared/SearchBar.vue'
import { computed, watch } from 'vue'
import CountryCard from './shared/CountryCard.vue'
import { useRoute } from 'vue-router'
import FetchingHandler from './shared/FetchingHandler.vue'

const countriesStore = useCountriesStore()
const route = useRoute()

const searchTerm = computed({
  get() {
    return countriesStore.searchTerm
  },
  set(newTerm) {
    countriesStore.updateSearchTerm(newTerm)
  }
})
const filteredCountries = computed(() => countriesStore.filteredCountries)

const emptyResultPlaceholder = computed(() => {
  if (!countriesStore.selectedRegions.length) {
    return 'No Region Selected'
  } else if (countriesStore.searchTerm.length && !countriesStore.filteredCountries.length) {
    if (countriesStore.selectedRegions.length < countriesStore.regions.length) {
      return `There is no country with the name "${countriesStore.searchTerm}" in the selected Regions`
    }
    return 'There is no such Country'
  }
  return null
})
watch(() => route.params, countriesStore.fetchCountries, { immediate: true })
</script>
<template>
  <FetchingHandler :is-fetching="countriesStore.isFetching" :error="countriesStore.error" />
  <div v-if="countriesStore.countries.length">
    <div class="flex flex-col items-start justify-between gap-10 md:flex-row">
      <SearchBar placeholder="Search for a country..." v-model:search-term="searchTerm" />
      <MultiSelectInput
        id="countries"
        :items="countriesStore.regions"
        :selected-items="countriesStore.selectedRegions"
        :update-items-action="countriesStore.updateSelectedRegions"
        label="Filter by Region"
        class="flex-shrink-0"
      />
    </div>

    <div
      class="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-14 sm:justify-between"
      :class="{ 'items-center': !filteredCountries.length }"
    >
      <CountryCard
        class="h-[360px] w-[290px] sm:h-[325px] sm:w-[240px]"
        v-for="(country, index) in filteredCountries"
        :key="country?.name?.official"
        :title="country?.name?.common"
        :image="{
          src: country?.flags.svg,
          alt: country?.flags.alt
        }"
        :loading="index > 10 ? 'lazy' : 'eager'"
        :region="country?.region"
        :population="country?.population"
        :capital="country?.capital"
        :link-param="country?.cca3"
      />

      <div v-if="emptyResultPlaceholder" class="w-full text-center text-2xl">
        <h1>{{ emptyResultPlaceholder }}</h1>
      </div>
    </div>
  </div>
</template>
