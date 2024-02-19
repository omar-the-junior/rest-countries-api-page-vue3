<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries'
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ActionButton from '@/components/shared/ActionButton.vue'
import CountryInfo from '@/components/TheCountry/TheCountryInfo.vue'
import FetchingHandler from '@/components/shared/FetchingHandler.vue'

const route = useRoute()
const router = useRouter()
const countriesStore = useCountriesStore()

const country = computed(() =>
  countriesStore.getFormattedCountry({ code: route.params.cca3 as string })
)

onMounted(() => {
  watch(
    () => {
      route.params
    },
    countriesStore.fetchCountries,
    { immediate: true }
  )
})
</script>

<template>
  <ActionButton
    @click="router.back"
    icon="bi:arrow-left"
    class="w-fit rounded-md bg-white px-9 py-2 shadow-md"
  >
    Back
  </ActionButton>

  <FetchingHandler :error="countriesStore.error" :is-fetching="countriesStore.isFetching" />

  <CountryInfo v-if="country" :country="country" />
</template>
