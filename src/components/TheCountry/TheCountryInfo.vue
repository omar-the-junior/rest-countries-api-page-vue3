<script setup lang="ts">
import type { FormattedCountry } from '@/api/types'
import ActionButton from '@/components/shared/ActionButton.vue'

defineProps<{ country: FormattedCountry }>()
</script>

<template>
  <div
    class="mt-16 grid w-full grid-cols-1 justify-center gap-x-12 lg:grid-cols-2 lg:justify-start"
  >
    <div>
      <img class="w-full max-w-lg" :src="country.flags.svg" :alt="country.flags.png" />
    </div>

    <div class="mt-10">
      <h1 class="text-3xl font-black">{{ country.name.common }}</h1>

      <div class="mt-5 grid gap-y-11 md:grid-cols-2 lg:mt-10">
        <ul class="flex flex-col gap-y-2">
          <li><b>Native Name:</b> {{ country.name?.nativeName }}</li>
          <li><b>Population:</b> {{ country.population.toLocaleString() }}</li>
          <li><b>Region:</b> {{ country.region }}</li>
          <li><b>Sub region:</b> {{ country.subRegion }}</li>
          <li><b>Capital:</b> {{ country.capital.join(', ') }}</li>
        </ul>
        <ul class="flex flex-col gap-y-2">
          <li><b>To Level Domain:</b> {{ country.tld.join(', ') }}</li>
          <li><b>Currencies:</b> {{ country.currencies.join(', ') }}</li>
          <li><b>Languages:</b> {{ country.languages.join(', ') }}</li>
        </ul>
      </div>

      <div class="mt-10 flex flex-col gap-x-5 md:flex-row lg:mt-20">
        <h3 class="bold min-w-fit py-2">Border Countries:</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="{ name, code } in country.borderCountries" :key="code">
            <RouterLink :to="{ name: 'countryDetails', params: { cca3: code } }">
              <ActionButton class="w-fit rounded-md px-4 py-2 shadow-md">
                {{ name }}
              </ActionButton>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
