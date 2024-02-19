import { getAllCountries } from '@/api/getCountries'
import type { Country } from '@/api/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { FormattedCountry } from '@/api/types'
import { formatCountry } from '@/utils/formatCountry'

export type CountriesByCode = Record<string, Country>

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<Array<Country>>([])
  const regions = ref<Array<string>>([])
  const selectedRegions = ref<Array<string>>([])
  const searchTerm = ref<string>('')
  const isFetching = ref<boolean>(true)
  const error = ref<any>(null)

  const fetchCountries = async () => {
    if (!countries.value.length) {
      try {
        const data = await getAllCountries()
        const extractedRegions = new Array(...new Set(data.map((country) => country.region)))

        regions.value = selectedRegions.value = extractedRegions.sort()
        isFetching.value = false
        countries.value = data
      } catch (err) {
        error.value = err
      }
    }
  }

  const updateSelectedRegions = (newRegions: Array<string>) => {
    selectedRegions.value = newRegions
  }

  const updateSearchTerm = (newTerm: string) => {
    searchTerm.value = newTerm
  }

  const filteredCountries = computed(() => {
    let { value: countriesArray } = countries

    if (selectedRegions.value != regions.value) {
      countriesArray = countriesArray.filter((country) =>
        selectedRegions.value.includes(country.region)
      )
    }

    if (searchTerm.value.length) {
      countriesArray = countriesArray.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    }

    return countriesArray
  })

  const countriesByCode = computed<CountriesByCode>(() => {
    return countries.value.reduce((previous, current) => {
      previous[current.cca3] = current
      return previous
    }, {} as CountriesByCode)
  })

  const getFormattedCountry = computed<({ code }: { code: string }) => FormattedCountry | null>(
    () =>
      ({ code }: { code: string }) => {
        const selectedCountry = countriesByCode.value[code]

        if (!selectedCountry) {
          return null
        }

        return formatCountry(selectedCountry, countriesByCode.value)
      }
  )

  return {
    error,
    isFetching,
    selectedRegions,
    filteredCountries,
    regions,
    countries,
    countriesByCode,
    searchTerm,
    getFormattedCountry,
    fetchCountries,
    updateSelectedRegions,
    updateSearchTerm
  }
})
